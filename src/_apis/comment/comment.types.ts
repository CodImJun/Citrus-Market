import { PaginationType, UserType } from "@/_types";
import { CommentType } from "@/_types/comment";

// 7.1
export type CreateCommentRequest = {
  post_id: string;
  content: string;
};
export type CreateCommentResponse = {
  id: string;
  content: string;
  createdAt: string;
  author: UserType;
};

// 7.2
export type GetCommentListRequest = PaginationType & {
  post_id: string;
};
export type GetCommentListResponse = {
  comments: CommentType[];
};

// 7.3
export type DeleteCommentRequest = {
  post_id: string;
  comment_id: string;
};
export type DeleteCommentResponse = {
  message: string;
};
