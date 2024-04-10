import Cookies from "js-cookie";

export const setCookie = (
  name: string,
  value: string,
  options?: Cookies.CookieAttributes
) => {
  return Cookies.set(name, value, { ...options });
};

export const getCookie = (name: string) => {
  return Cookies.get(name);
};

export const removeCookie = (
  name: string,
  options?: Cookies.CookieAttributes
) => {
  return Cookies.remove(name, { ...options });
};
