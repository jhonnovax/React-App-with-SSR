import React from 'react';
import { BrowserRouter, Route, Switch, matchPath } from 'react-router-dom';
import routes from './routes';
import Layout from './components/layout';

App.getServerData = async ({ path, query }) => {    
  const route = routes.find(route => matchPath(path, route)); 
  let serverData = null;

  if (route && route.component.load) { 
    const component = await new Promise(resolve => route.component.load().then(component => resolve(component))); 
    route.component = component.default;
  }

  if (route && route.component.getServerData) {   
    const params = {}; //getRouteParams(route, path);
    const location = { params, route, query };
    serverData = await route.component.getServerData(location);
  }

  return {
    props: serverData?.props,
    notFound: serverData?.notFound
  };
};


export default function App() {

  return (
    <BrowserRouter>
      <Layout>
        <Switch>
          {routes.map((route, index) => 
            <Route 
              key={index}
              exact={route.exact} 
              path={route.path}
              component={route.component}>
            </Route>
          )}
        </Switch> 
      </Layout>
      <style global jsx>{`
        * {
          box-sizing: border-box;
          margin: 0;
          padding: 0;
        }

        html {
          font-size: 65%;
        }

        body {
          font-family: Helvetica, Arial, sans-serif;
          font-size: 1.6rem;
        }
      `}</style>
    </BrowserRouter>
  );
}
