import { instance } from "@/_states";
import {
  CreateCommentRequest,
  CreateCommentResponse,
  DeleteCommentRequest,
  DeleteCommentResponse,
  GetCommentListRequest,
  GetCommentListResponse,
} from "./comment.types";

export const CommentAPI = {
  // 7.1
  createComment: async ({ post_id, content }: CreateCommentRequest) => {
    const { data } = await instance.post<CreateCommentResponse>(
      `/post/${post_id}/comments`,
      {
        comment: {
          content,
        },
      }
    );
    return data.comment;
  },
  // 7.2
  getCommentList: async ({ post_id, limit, skip }: GetCommentListRequest) => {
    const { data } = await instance.get<GetCommentListResponse>(
      `/post/${post_id}/comments`,
      {
        params: {
          limit,
          skip,
        },
      }
    );
    return data.comments;
  },
  // 7.3
  deleteComment: async ({ post_id, comment_id }: DeleteCommentRequest) => {
    const { data } = await instance.delete<DeleteCommentResponse>(
      `/post/${post_id}/comments/${comment_id}`
    );
    return data;
  },
};
