import axios from 'axios';
import appConfig from '../config'
import store from './store';

const axiosSetup = () => {
  axios.interceptors.request.use(
    (config) => {
      const token = store.getState().token;
      config.baseURL = appConfig.backendUrl;
      config.headers.Authorization = `Bearer ${token}`;
      return config;
    },
  );
  axios.interceptors.response.use(
    (response) => response.data,
    (error) => {
      return Promise.reject(error.response);
    },
  );
}

export default axiosSetup;
