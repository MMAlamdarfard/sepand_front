// axiosInstance.js
import axios from 'axios';
import { redirect } from 'next/navigation';
import login from '../Api/login/login';
// Create an Axios instance
const http = axios.create({
  baseURL: 'https://api.bsadak.ir/api/', // Set your base URL here
});

// Request interceptor
http.interceptors.request.use(
  (config) => {
    config.headers['Content-Type']="application/json"
   

   const token = sessionStorage.getItem('access');
   console.log(token)
   config.headers['Authorization']=token
    // if (token) {
    //   config.headers.Authorization = `Bearer ${token}`;
    // }
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
  async (error) => {
    const originalRequest = error.config;

    if (error.response?.status === 401) {
      // Prevent infinite loop by checking if this request is already trying to refresh the token
     // if (originalRequest.url?.includes('refreshToken')) {
       // If the refresh token request failed, log out the user
     
     // }

      
        // Attempt to refresh the token
        try {
          const newToken =await  login.refreshToken({token:sessionStorage.getItem('refresh')??""})
        
          if (newToken) {
            // Update the headers and retry the original request
           
            sessionStorage.setItem('access',newToken)
            http.defaults.headers['Authorization'] = `${newToken}`;
            originalRequest.headers['Authorization'] = `${newToken}`;
  
            // Retry the original request with the new token
            return http(originalRequest);
          }else{
            if (typeof window !== 'undefined'){
              sessionStorage.removeItem("access");
               sessionStorage.removeItem("refresh");
              window.location.href = '/login';
             }
             else{
               redirect('/login');
             }
          }
         
        } catch (error) {
          if (typeof window !== 'undefined'){
            sessionStorage.removeItem("access");
             sessionStorage.removeItem("refresh");
            window.location.href = '/login';
           }
           else{
             redirect('/login');
           }
        }
      
    }
    return Promise.reject(error);
  }
);

export default http;