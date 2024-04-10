"use client";

import { LoginResponse } from "@/_apis";
import { ACCESS_TOKEN_KEY, REFRESH_TOKEN_KEY } from "@/_constants";
import { UserType } from "@/_types";
import { isStatusInData } from "@/_utils";
import { create } from "zustand";
import { persist } from "zustand/middleware";
import { immer } from "zustand/middleware/immer";
import { removeCookie, setCookie } from "@/_utils/cookie";

type LoginStoreState = {
  loginInfo: Pick<
    UserType,
    "_id" | "image" | "accountname" | "username" | "intro"
  >;
};

type LoginStoreAction = {
  handleSetLoginInfo: (data: LoginResponse) => void;
  handleLogOut: () => void;
  handleChangeInfo: (
    info: Pick<UserType, "image" | "accountname" | "username" | "intro">
  ) => void;
};

const initialState = {
  loginInfo: {
    _id: "",
    image: "",
    accountname: "",
    username: "",
    intro: "",
  },
};

export const useAuthStore = create<LoginStoreState & LoginStoreAction>()(
  persist(
    immer((set) => ({
      ...initialState,
      handleSetLoginInfo: (data) => {
        set((state) => {
          if (!isStatusInData(data)) {
            state.loginInfo = {
              _id: data.user._id,
              image: data.user.image,
              accountname: data.user.accountname,
              username: data.user.username,
              intro: data.user.intro,
            };
            setCookie(ACCESS_TOKEN_KEY, data.user.token);
            setCookie(REFRESH_TOKEN_KEY, data.user.refreshToken);
          }
        });
      },
      handleLogOut: () =>
        set((state) => {
          state.loginInfo = initialState.loginInfo;
          removeCookie(ACCESS_TOKEN_KEY);
          removeCookie(REFRESH_TOKEN_KEY);
        }),
      handleChangeInfo: (info) => {
        set((state) => {
          state.loginInfo = {
            _id: state.loginInfo._id,
            image: info.image,
            accountname: info.accountname,
            username: info.username,
            intro: info.intro,
          };
        });
      },
    })),
    {
      name: "LOGIN_STORE",
    }
  )
);
