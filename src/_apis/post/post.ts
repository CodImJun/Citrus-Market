import { instance } from "@/_states/server";
import {
  CreatePostRequest,
  CreatePostResponse,
  GetFollowingPostListRequest,
  GetFollowingPostListResponse,
  GetMyPostListRequest,
  GetMyPostListResponse,
  GetPostDetailRequest,
  GetPostDetailResponse,
} from "./post.types";

export const PostAPI = {
  // 5.1
  createPost: async ({ content, image }: CreatePostRequest) => {
    const { data } = await instance.post<CreatePostResponse>("/post", {
      post: {
        content,
        image,
      },
    });
    return data;
  },
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
    const { data } = await instance.get<GetMyPostListResponse>(
      `/post/${accountname}/userpost`
    );
    return data.post;
  },
  // 5.4
  getPostDetail: async ({ post_id }: GetPostDetailRequest) => {
    const { data } = await instance.get<GetPostDetailResponse>(
      `/post/${post_id}`
    );
    return data.post;
  },
};
