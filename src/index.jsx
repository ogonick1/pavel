import React from 'react';
import ReactDOM from 'react-dom';
import { ToastContainer } from 'react-toastify';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import App from './App.jsx';
import { store, persistor } from './plugins/store';
import './plugins/i18n/index';
import axiosSetup from './plugins/axiosSetup';

import './global/styles/global.scss';
import 'react-toastify/dist/ReactToastify.css';

axiosSetup();

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <App />
        <ToastContainer />
      </PersistGate>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root'),
);
