// axiosInstance.js
import axios from 'axios';
// Create an Axios instance
const httpLogin = axios.create({
  baseURL: 'https://api.bsadak.ir/web/', // Set your base URL here
});
// Request interceptor
httpLogin.interceptors.request.use(
  (config) => {
    config.headers['Content-Type']="application/json"
    
    return config;
  },
  (error) => {
    console.log(error)
    return Promise.reject(error);
  }
);


export default httpLogin;