"use client";

import { LoginResponse } from "@/_apis";
import { ACCESS_TOKEN_KEY, REFRESH_TOKEN_KEY } from "@/_constants";
import { UserType } from "@/_types";
import { isStatusInData } from "@/_utils";
import { create } from "zustand";
import { persist } from "zustand/middleware";
import { immer } from "zustand/middleware/immer";

type UseAuthStoreState = {
  isLoggedIn: boolean;
  loginInfo: Pick<UserType, "_id" | "accountname" | "username">;
};

type UseAuthStoreAction = {
  handleSetLoginInfo: (data: LoginResponse) => void;
  handleLogOut: () => void;
};

const initialState = {
  isLoggedIn: Boolean(localStorage.getItem(ACCESS_TOKEN_KEY)),
  loginInfo: {
    _id: "",
    accountname: "",
    username: "",
  },
};

export const useAuthStore = create<UseAuthStoreState & UseAuthStoreAction>()(
  persist(
    immer((set) => ({
      ...initialState,
      handleSetLoginInfo: (data) => {
        set((state) => {
          if (!isStatusInData(data)) {
            state.isLoggedIn = true;
            state.loginInfo = {
              _id: data.user._id,
              accountname: data.user.accountname,
              username: data.user.username,
            };
            localStorage.setItem(ACCESS_TOKEN_KEY, data.user.token);
            localStorage.setItem(REFRESH_TOKEN_KEY, data.user.refreshToken);
          }
        });
      },
      handleLogOut: () => {
        set(initialState);
        localStorage.removeItem(ACCESS_TOKEN_KEY);
        localStorage.removeItem(REFRESH_TOKEN_KEY);
      },
    })),
    {
      name: "CITRUS_AUTH_STORE",
    }
  )
);
