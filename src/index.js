import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { loadableReady } from '@loadable/component';
import App from './app';


loadableReady(() => {
  const renderMethod = window.initialState ? ReactDOM.render : ReactDOM.hydrate;

  renderMethod(
    <BrowserRouter>
      <App />
    </BrowserRouter>,
    document.querySelector('#app')
  );
});