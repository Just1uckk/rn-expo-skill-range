import axios, { AxiosError } from "axios";

import { ApiInterface } from "./apiInterfaces";

const API_BASE_URL = process.env.EXPO_PUBLIC_API_URL;

const api = axios.create({
  baseURL: API_BASE_URL,
  timeout: 10000,
});

api.interceptors.response.use(
  (response) => response,
  (error: AxiosError) => {
    if (error.response) {
      console.error("Error response:", error.response.data);
      return Promise.reject(error.response.data);
    } else if (error.request) {
      console.error("Error request:", error.request);
      return Promise.reject({ message: "No response from server." });
    } else {
      console.error("Error message:", error.message);
      return Promise.reject({ message: error.message });
    }
  },
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
        const errorMessage =
          error.response?.data.message || `Error: ${error.response.data}`;
        throw new Error(errorMessage);
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
        const errorMessage =
          error.response?.data.message || `Error: ${error.response.data}`;
        throw new Error(errorMessage);
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
        const errorMessage =
          error.response?.data.message || `Error: ${error.response.data}`;
        throw new Error(errorMessage);
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
        const errorMessage =
          error.response?.data.message || `Error: ${error.response.data}`;
        throw new Error(errorMessage);
      });
  },
};

export default API;
