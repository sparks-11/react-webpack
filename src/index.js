import React from 'react';
import { createRoot } from 'react-dom/client';
const container = document.querySelector('#root');
const root = createRoot(container);

import App from './app/App';
import { Provider } from 'react-redux';
import './main.scss';
import './i18n.js';
import state from './state';

root.render(
  <Provider store={state}>
    <App tab="home" />
  </Provider>
);
