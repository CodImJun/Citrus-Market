import { PostType } from "@/_types";

export type PostLikeRequest = {
  post_id: string;
};
export type PostLikeResponse = {
  post: PostType;
};

export type PostUnLikeRequest = {
  post_id: string;
};
export type PostUnLikeResponse = {
  post: PostType;
};
