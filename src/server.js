require('dotenv').config();
import express from 'express';
import routes from './apis/routes';

const expressApp = express();
const isDev = process.env.NODE_ENV !== 'production';

expressApp.use(require('cors')({ origin: true }));
expressApp.use(express.static(isDev ? 'dist/public' : './public'));
expressApp.use(routes);

expressApp.use('*', async (req, res) => {
  try {  
    const React = await import('react');
    const { ChunkExtractor } = await import('@loadable/server');
    const { renderToString } = await import('react-dom/server');
    const { StaticRouter } = await import('react-router-dom');
    const { HelmetProvider } = await import('react-helmet-async');
    const { flushToHTML: renderStyledJsx } = await import('styled-jsx/server');
    const path = await import('path');
    const App = (await import('./app')).default;
    
    const { props, notFound } = await App.getServerData({ path: req.baseUrl, query: req.query });

    if (notFound) {
      res.redirect('/404');
      return;
    }

    const helmetContext = {};  
    const contentComponent = (
      <HelmetProvider context={helmetContext}>
        <StaticRouter location={req.baseUrl}>
          <App />
        </StaticRouter>
      </HelmetProvider>
    );

    const isDev = process.env.NODE_ENV !== 'production';
    const statsFile = path.resolve(isDev ? './dist/public' : './public', 'loadable-stats.json');
    const extractor = new ChunkExtractor({ statsFile });
    const appJsx = extractor.collectChunks(contentComponent);
    const appTags = renderToString(appJsx);          
    const styleTags = renderStyledJsx();
    const { helmet } = helmetContext;
    const html = `
      <!DOCTYPE html>
      <html ${helmet.htmlAttributes.toString()}>
        <head>
          ${helmet.title.toString()}
          ${helmet.meta.toString()}
          ${extractor.getLinkTags()}
          ${helmet.link.toString()}
          ${extractor.getStyleTags()}
          ${helmet.style.toString()}
          ${helmet.script.toString()}
          ${styleTags}
        </head>
        <body ${helmet.bodyAttributes.toString()}>
          <div id="app">
            ${appTags}
          </div>
          <script>window.initialProps=${JSON.stringify(props)}</script>
          ${extractor.getScriptTags()}
        </body>
      </html>
    `;
    
    res.send(html);  
  } catch (error) {
    console.error('Error server side rendering', error);
    res.status(500).json(error);
  }
});

expressApp.listen(3000);
