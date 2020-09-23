import axios from 'axios';
import { notification } from 'antd';
import { getToken } from '@/utils/token';

class HttpRequest {
   constructor() {
      this.baseURL = process.env.BASE_URL;
      this.timeout = 6000;
   }

   request(config) {
      // axios.defaults.withCredentials = true;
      const instance = axios.create({
         baseURL: this.baseURL,
         timeout: this.timeout
      });

      instance.interceptors.request.use(
         config => {
            config.headers.Authorization = `Bearer ${getToken()}`;
            return config;
         },
         error => Promise.reject(error)
      );

      instance.interceptors.response.use(
         response => {
            const { status, data } = response;
            if (status === 200) {
               const { code, message, data: wrapData } = data;
               if (code === 1200) {
                  return wrapData;
               } else {
                  notification.error({
                     message: 'System hint',
                     description: message
                  });
                  return Promise.reject(message);
               }
            } else {
               return Promise.reject(response.message);
            }
         },
         error => {
            const { response, message } = error;
            const { status } = response;
            if (status === 401) {
               // Token expired, or login is invalid
               notification.error({
                  message: 'System hint',
                  description: message
               });
               window.location.href = '/login';
            } else {
               notification.error({
                  message: 'System hint',
                  description: 'Server is busy, please try again later!'
               });
               return Promise.reject(error);
            }
         }
      );

      return instance(config);
   }
}

export default new HttpRequest();
