import React, { createContext, useContext, useEffect } from 'react';
import { AxiosInstance } from 'axios';
import axiosInstance from 'services/api';

const ApiContext = createContext(axiosInstance);

const ApiProvider = ({ children }: { children: React.ReactNode }) => {
  useEffect(() => {
    axiosInstance.interceptors.request.use(
      config => {
        config.headers = {
          'Content-Type': 'application/json',
          ...config.headers
        };

        return config;
      },
      error => {
        throw error;
      }
    );

    axiosInstance.interceptors.response.use(
      response => {
        return response;
      },
      error => {
        throw error;
      }
    );
  }, []);

  return <ApiContext.Provider value={axiosInstance}>{children}</ApiContext.Provider>;
};

const useApi = (): AxiosInstance => useContext(ApiContext);

export { ApiProvider, ApiContext, useApi };
