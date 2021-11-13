import axios from 'axios';

const axiosSetup = () => {
  axios.interceptors.request.use(
    (config) => {
      return config;
    },
  );
  axios.interceptors.response.use(
    (response) => response.data,
    (error) => {
      return Promise.reject(error);
    },
  );
}

export default axiosSetup;
