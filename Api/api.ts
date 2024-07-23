// axiosInstance.js
import axios from 'axios';

// Create an Axios instance
const http = axios.create({
  baseURL: 'http://localhost:3001/', // Set your base URL here
});

// Request interceptor
http.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem('token');
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);
http.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    console.log(error)
    // if (error.response && error.response.status === 401) {
    //   window.location.href = '/login';
    // }
    return Promise.reject(error);
  }
);

export default http;