import { PaginationType, PostType, UserType } from "@/_types";
import { CommentType } from "@/_types/comment";

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

// 5.4
export type GetPostDetailRequest = {
  post_id: string;
};
export type GetPostDetailResponse = {
  post: PostType & {
    comments: CommentType[];
  };
};

// 5.6
export type DeletePostRequest = {
  post_id: string;
};
export type DeletePostResponse = {
  message: string;
};
