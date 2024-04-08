import { instance } from "@/_states/server";
import {
  CreatePostRequest,
  CreatePostResponse,
  DeletePostRequest,
  DeletePostResponse,
  GetFollowingPostListRequest,
  GetFollowingPostListResponse,
  GetMyPostListRequest,
  GetMyPostListResponse,
  GetPostDetailRequest,
  GetPostDetailResponse,
  UpdatePostRequest,
  UpdatePostResponse,
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
    limit,
    skip = 0,
  }: GetFollowingPostListRequest = {}) => {
    const { data } = await instance.get<GetFollowingPostListResponse>(
      `/post/feed`,
      {
        params: {
          limit,
          skip,
        },
      }
    );
    return { posts: data.posts, skip: skip + 5 };
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
  // 5.5
  updatePost: async ({ post_id, image, content }: UpdatePostRequest) => {
    const { data } = await instance.put<UpdatePostResponse>(
      `/post/${post_id}`,
      {
        post: {
          content,
          image,
        },
      }
    );
    return data;
  },
  // 5.6
  deletePost: async ({ post_id }: DeletePostRequest) => {
    const { data } = await instance.delete<DeletePostResponse>(
      `/post/${post_id}`
    );
    return data;
  },
};
