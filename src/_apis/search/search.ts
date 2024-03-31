import { instance } from "@/_states/server";
import { SearchUserRequest, SearchUserResponse } from "./search.types";

export const SearchAPI = {
  searchUser: async ({ keyword }: SearchUserRequest) => {
    const { data } = await instance.get<SearchUserResponse>(
      "/user/searchuser",
      {
        params: {
          keyword,
        },
      }
    );
    return data;
  },
};
