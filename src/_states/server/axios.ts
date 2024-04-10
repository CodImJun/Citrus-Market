import { ACCESS_TOKEN_KEY, REFRESH_TOKEN_KEY } from "@/_constants";
import { getCookie } from "@/_utils/cookie";
import axios, { AxiosInstance } from "axios";

export const BaseInstanceConfig = {
  baseURL: process.env.NEXT_PUBLIC_API_URL,
  headers: {
    "Content-Type": "application/json",
  },
  timeout: 3000,
};

export const instance: AxiosInstance = axios.create(BaseInstanceConfig);

instance.interceptors.request.use(
  (config) => {
    if (typeof window !== "undefined") {
      const ACCESS_TOKEN = getCookie(ACCESS_TOKEN_KEY);
      if (ACCESS_TOKEN) {
        config.headers.Authorization = `Bearer ${ACCESS_TOKEN}`;
      }
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

// API상 refresh token으로 새 token 발급 하는 기능이 없음
instance.interceptors.response.use(
  (response) => {
    return response;
  },
  async (error) => {
    const REFRESH_TOKEN = getCookie(REFRESH_TOKEN_KEY);
    if (error.status === 401 && REFRESH_TOKEN) {
      const res = await instance.get("/user/checktoken", {
        headers: { Authorization: `Bearer ${REFRESH_TOKEN}` },
      });
      if (!res.data.isValid) {
      }
    }

    return Promise.reject(error);
  }
);
