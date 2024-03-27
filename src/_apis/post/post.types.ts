import { PaginationType, PostType } from "@/_types";

// 5.1
export type CreatePostRequest = {
  content: string;
  image: string;
};
export type CreatePostResponse = {
  post: PostType;
};

// 5.2
export type GetFollowingPostListRequest = PaginationType;
export type GetFollowingPostListResponse = {
  posts: PostType[];
};

// 5.3
export type GetMyPostListRequest = {
  accountname: string;
};
export type GetMyPostListResponse = {
  post: PostType[];
};
