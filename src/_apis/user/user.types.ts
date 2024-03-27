import { UserType } from "@/_types";

export type LoginRequest = {
  email: string;
  password: string;
};
export type LoginResponse =
  | {
      user: Pick<UserType, "_id" | "username" | "accountname" | "image"> & {
        email: string;
        token: string;
        refreshToken: string;
      };
    }
  | {
      message: string;
      status: number;
    };

export type SignUpRequest = {
  image?: string;
  intro?: string;
  email: string;
  password: string;
  accountname: string;
  username: string;
};
export type SignUpResponse = {
  message: string;
  user: Pick<
    UserType,
    "_id" | "username" | "accountname" | "intro" | "image"
  > & { email: string };
};
