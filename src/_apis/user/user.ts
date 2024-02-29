import { createInstance } from "@/_states/server";
import {
  AccountValidRequest,
  AccountValidResponse,
  EmailValidRequest,
  EmailValidResponse,
  GetProfileResponse,
  LoginRequest,
  LoginResponse,
  SignUpRequest,
  SignUpResponse,
} from "./user.types";

const userInstance = createInstance("/user");
const api = {
  get: <T>(...args: Parameters<typeof userInstance.get>) => {
    return userInstance.get<T>(...args);
  },
  post: <T, R>(url: string, data: R, ...rest: any[]) => {
    return userInstance.post<T>(url, { user: data }, ...rest);
  },
  put: <T, R>(url: string, data: R, ...rest: any[]) => {
    return userInstance.put<T>(url, { user: data }, ...rest);
  },
  patch: <T, R>(url: string, data: R, ...rest: any[]) => {
    return userInstance.patch<T>(url, { user: data }, ...rest);
  },
  delete: <T>(...args: Parameters<typeof userInstance.delete>) => {
    return userInstance.delete<T>(...args);
  },
};

export const UserApi = {
  signUp: async (userData: SignUpRequest) => {
    const { data } = await api.post<SignUpResponse, SignUpRequest>(
      "",
      userData
    );
    return data;
  },
  login: async (userData: LoginRequest) => {
    const { data } = await api.post<LoginResponse, LoginRequest>(
      "/login",
      userData
    );
    return data;
  },
  // TODO : Add Authorization
  getProfile: async () => {
    const { data } = await api.get<GetProfileResponse>("/myinfo");
    return data;
  },
  emailValid: async (email: EmailValidRequest) => {
    const { data } = await api.post<EmailValidResponse, EmailValidRequest>(
      "/emailvalid",
      email
    );
    return data;
  },
  accountValid: async (accountname: AccountValidRequest) => {
    const { data } = await api.post<AccountValidResponse, AccountValidRequest>(
      "/accountnamevalid",
      accountname
    );
    return data;
  },
};
