import axios, { AxiosInstance } from "axios";

export const BaseInstanceConfig = {
  baseURL: process.env.NEXT_PUBLIC_API_URL,
  headers: {
    "Content-Type": "application/json",
  },
  timeout: 3000,
};

export const instance: AxiosInstance = axios.create(BaseInstanceConfig);

export const createInstance = (apiUrl: string) =>
  axios.create({
    ...BaseInstanceConfig,
    baseURL: BaseInstanceConfig.baseURL + apiUrl,
  });
