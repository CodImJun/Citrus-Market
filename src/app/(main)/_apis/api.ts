import { instance } from "@/_states/server";
import { ViewAllPostRequest, ViewAllPostResponse } from "./api.types";

export const MainPageApi = {
  ViewAllPost: async (params?: ViewAllPostRequest) => {
    const { data } = await instance.get<ViewAllPostResponse>(`/post`, {
      params,
    });
    return data;
  },
};
