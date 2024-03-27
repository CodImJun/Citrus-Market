import { UserType } from "@/_types";

export type SearchUserRequest = {
  keyword: string;
};
export type SearchUserResponse = UserType[];
