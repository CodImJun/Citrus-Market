import { instance } from "@/_states/server";
import { LoginRequest, LoginResponse } from "./user.types";

export const UserAPI = {
  signUp: () => {},
  login: async ({ email, password }: LoginRequest) => {
    const { data } = await instance.post<LoginResponse>("/user/login", {
      user: { email, password },
    });
    return data;
  },
};
