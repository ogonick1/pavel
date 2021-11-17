import axios from 'axios';
import appConfig from '../config';
import store from './store';

const axiosSetup = () => {
  axios.interceptors.request.use(
    (config) => {
      const newConfig = config;
      const token = store.getState().token;
      newConfig.baseURL = appConfig.backendUrl;
      newConfig.headers.Authorization = `Bearer ${token}`;
      return config;
    },
  );
  axios.interceptors.response.use(
    (response) => response.data,
    (error) => {
      return Promise.reject(error.response);
    },
  );
};

export default axiosSetup;
