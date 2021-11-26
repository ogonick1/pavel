import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react'
import App from './App.jsx';

import { store, persistor } from './plugins/store';
import './plugins/i18n/index';
import axiosSetup from './plugins/axiosSetup';

import './global/styles/global.scss';

axiosSetup();

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <PersistGate
        persistor={persistor}
        loading={null}
      >
        <App />
      </PersistGate>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root'),
);
