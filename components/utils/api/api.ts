import axios, { AxiosError, AxiosResponse } from 'axios';
// import { API_BASE_URL } from '@env';
import { BaseInterface } from './base';

const API_BASE_URL = 'https://stage.skillrange.com/api/models_api'

interface ApiInterface {
  doGet(
    endpoint: string,
    headers?: any,
    api?: string
  ): Promise<AxiosResponse<any, any>>;
  doPatch(
    endpoint: string,
    data: any,
    headers?: any,
    api?: string
  ): Promise<AxiosResponse<any, any>>;
  doPost(
    endpoint: string,
    data: any,
    headers?: any,
    api?: string
  ): Promise<AxiosResponse<any, any>>;
  doPut(
    endpoint: string,
    data: any,
    headers?: any,
    api?: string
  ): Promise<AxiosResponse<any, any>>;
  base?: BaseInterface;
}

const api = axios.create({
    baseURL: API_BASE_URL,
    timeout: 10000,
  });
  
  api.interceptors.response.use(
    response => response,
    (error: AxiosError) => {
      if (error.response) {
        console.error('Error response:', error.response.data);
        return Promise.reject(error.response.data);
      } else if (error.request) {
        console.error('Error request:', error.request);
        return Promise.reject({ message: 'No response from server.' });
      } else {
        console.error('Error message:', error.message);
        return Promise.reject({ message: error.message });
      }
    }
  );

  const API: ApiInterface = {
    async doGet(endpoint: string, headers?: any) {
      return api
        .get(endpoint, {
          headers: {
            ...headers,
          },
        })
        .then((response) => response.data)
        .catch((error) => {
          const errorMessage = error.response?.data.message || `Error: ${error.response.data}`
          throw new Error(errorMessage)
        });
    },
  
    async doPatch(endpoint: string, data: any, headers?: any) {
      return api
        .patch(endpoint, data, {
          headers: {
            ...headers,
          },
        })
        .then((response) => response.data)
        .catch((error) => {
          const errorMessage = error.response?.data.message || `Error: ${error.response.data}`
          throw new Error(errorMessage)
        });
    },
  
    async doPost(endpoint: string, data: any, headers?: any) {
      return api
        .post(endpoint, data, {
          headers: {
            ...headers,
          },
        })
        .then((response) => response.data)
        .catch((error) => {
          const errorMessage = error.response?.data.message || `Error: ${error.response.data}`
          throw new Error(errorMessage)
        });
    },
  
    async doPut(endpoint: string, data: any, headers?: any): Promise<any> {
      return api
        .put(endpoint, data, {
          headers: {
            ...headers,
          },
        })
        .then((response) => response.data)
        .catch((error) => {
          const errorMessage = error.response?.data.message || `Error: ${error.response.data}`
          throw new Error(errorMessage)
        });
    },
  };
  
  export default API;