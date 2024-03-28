import { LoginResponse } from "@/_apis";
import { ACCESS_TOKEN_KEY, REFRESH_TOKEN_KEY } from "@/_constants";
import { isStatusInData } from "@/_utils";
import { create } from "zustand";
import { persist } from "zustand/middleware";
import { immer } from "zustand/middleware/immer";

type UseAuthStoreState = {
  isLoggedIn: boolean;
  loginID: string;
};

type UseAuthStoreAction = {
  handleSetLoginInfo: (data: LoginResponse) => void;
  handleLogOut: () => void;
};

export const useAuthStore = create<UseAuthStoreState & UseAuthStoreAction>()(
  persist(
    immer((set) => ({
      isLoggedIn: Boolean(localStorage.getItem(ACCESS_TOKEN_KEY)),
      loginID: "",
      handleSetLoginInfo: (data) => {
        set((state) => {
          if (!isStatusInData(data)) {
            state.isLoggedIn = true;
            state.loginID = data.user._id;
            localStorage.setItem(ACCESS_TOKEN_KEY, data.user.token);
            localStorage.setItem(REFRESH_TOKEN_KEY, data.user.refreshToken);
          }
        });
      },
      handleLogOut: () =>
        set((state) => {
          state.isLoggedIn = false;
          state.loginID = "";
          localStorage.removeItem(ACCESS_TOKEN_KEY);
          localStorage.removeItem(REFRESH_TOKEN_KEY);
        }),
    })),
    {
      name: "CITRUS_AUTH_STORE",
    }
  )
);
