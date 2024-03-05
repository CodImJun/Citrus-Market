import { getToken } from "@/_utils";
import axios, { AxiosInstance } from "axios";

const ACCESS_TOKEN = getToken.accessToken();
const REFRESH_TOKEN = getToken.refreshToken();

export const BaseInstanceConfig = {
  baseURL: process.env.NEXT_PUBLIC_API_URL,
  headers: {
    "Content-Type": "application/json",
    Authorization: `Bearer ${ACCESS_TOKEN}`,
  },
  timeout: 3000,
};

export const instance: AxiosInstance = axios.create(BaseInstanceConfig);

export const createInstance = (apiUrl: string) =>
  axios.create({
    ...BaseInstanceConfig,
    baseURL: BaseInstanceConfig.baseURL + apiUrl,
  });
