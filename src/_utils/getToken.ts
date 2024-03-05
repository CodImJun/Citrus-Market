import { ACCESS_TOKEN_KEY, REFRESH_TOKEN_KEY } from "@/_constants";

export const getToken = {
  accessToken: () => localStorage.getItem(ACCESS_TOKEN_KEY),
  refreshToken: () => localStorage.getItem(REFRESH_TOKEN_KEY),
};
