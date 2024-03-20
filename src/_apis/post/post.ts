import { instance } from "@/_states/server";
import {
  GetFollowingPostListRequest,
  GetFollowingPostListResponse,
} from "./post.types";

export const PostAPI = {
  getFollowingPostList: async ({
    limit = 5,
    skip = 0,
  }: GetFollowingPostListRequest = {}) => {
    const { data } = await instance.get<GetFollowingPostListResponse>(
      `/post/feed/?limit=${limit}&skip=${skip}`
    );
    return data.posts;
  },
};
