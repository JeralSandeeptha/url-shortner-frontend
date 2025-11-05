// src/utils/axiosClient.ts
import axios, { AxiosError } from 'axios';
import type { InternalAxiosRequestConfig, AxiosInstance } from 'axios';
import { config } from './envConfig';
import logger from '../utils/logger';

// Create an Axios instance
const axiosClient: AxiosInstance = axios.create({
  baseURL: config.VITE_API_URL || 'http://localhost:5000', // Default base URL
  timeout: 10000, // 10 seconds timeout
  headers: {
    'Content-Type': 'application/json',
  },
});

// ✅ Request Interceptor
axiosClient.interceptors.request.use(
  (config: InternalAxiosRequestConfig) => {
    // const token = config.AUTH_TOKEN;
    // if (token) {
    //   config.headers.Authorization = `Bearer ${token}`;
    // }

    logger.info(`🟢 [Request] ${config.method?.toUpperCase()} ${config.baseURL}${config.url}`);
    return config;
  },
  (error: AxiosError) => {
    logger.error('❌ Request Error:', error.message);
    return Promise.reject(error);
  }
);

// ✅ Response Interceptor
axiosClient.interceptors.response.use(
  (response) => {
    logger.info(`✅ [Response] ${response.status} ${response.config.url}`);
    return response;
  },
  (error: AxiosError) => {
    if (error.response) {
      logger.error(
        `❌ [Response Error] ${error.response.status} ${error.config?.url} - ${error.message}`
      );
    } else {
      logger.error(`❌ [Network Error] ${error.message}`);
    }
    return Promise.reject(error);
  }
);

export default axiosClient;
