import { instance } from "@/_states/server";
import {
  GetFollowingPostListRequest,
  GetFollowingPostListResponse,
  GetMyPostListRequest,
  GetMyPostListresponse,
} from "./post.types";

export const PostAPI = {
  // 5.2
  getFollowingPostList: async ({
    limit = 5,
    skip = 0,
  }: GetFollowingPostListRequest = {}) => {
    const { data } = await instance.get<GetFollowingPostListResponse>(
      `/post/feed/?limit=${limit}&skip=${skip}`
    );
    return data.posts;
  },
  // 5.3
  getMyPostList: async ({ accountname }: GetMyPostListRequest) => {
    const { data } = await instance.get<GetMyPostListresponse>(
      `/post/${accountname}/userpost`
    );
    return data.post;
  },
};
