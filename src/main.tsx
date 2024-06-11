import { createRoot } from 'react-dom/client';
import React from 'react';
import { Provider } from 'react-redux';
import store from './store/store';
import Widget from './components/Widget/Widget';

createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Provider store={store}>
      <Widget />
    </Provider>
  </React.StrictMode>
);
