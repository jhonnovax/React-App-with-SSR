import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import routes from './routes';
import Layout from './components/layout';

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
