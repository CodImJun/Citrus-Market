import { instance } from "@/_states/server";
import {
  LoginRequest,
  LoginResponse,
  SignUpRequest,
  SignUpResponse,
} from "./user.types";

export const UserAPI = {
  signUp: async ({
    image,
    email,
    password,
    username,
    accountname,
    intro,
  }: SignUpRequest) => {
    const { data } = await instance.post<SignUpResponse>("/user", {
      user: { image, email, password, username, accountname, intro },
    });
    return data;
  },

  login: async ({ email, password }: LoginRequest) => {
    const { data } = await instance.post<LoginResponse>("/user/login", {
      user: { email, password },
    });
    return data;
  },
};
