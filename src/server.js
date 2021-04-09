import express from 'express';

const expressApp = express();
const isDev = process.env.NODE_ENV !== 'production';

expressApp.use(require('cors')({ origin: true }));
expressApp.use(express.static(isDev ? 'dist/public' : './public'));

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

    const helmetContext = {};  
    const contentComponent = (
      <HelmetProvider context={helmetContext}>
        <StaticRouter location={req.baseUrl}>
          <App />
        </StaticRouter>
      </HelmetProvider>
    );
    
    const { props, notFound } = await App.getServerData({ path: req.baseUrl, query: req.query });

    if (notFound) {
      res.redirect('/404');
      return;
    }

    const isDev = process.env.NODE_ENV !== 'production';
    const statsFile = path.resolve(isDev ? './dist/public' : './public', 'loadable-stats.json');
    const extractor = new ChunkExtractor({ statsFile });
    const contentJsx = extractor.collectChunks(contentComponent);
    const contentTags = renderToString(contentJsx);          
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
            ${contentTags}
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
