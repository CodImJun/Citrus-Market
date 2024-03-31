import { CommentAPI, DeleteCommentRequest } from "@/_apis";
import { useMutation } from "@tanstack/react-query";
import { useUpdateComment } from "./useUpdateComment";

export const useDeleteCommentMutate = () => {
  const { handleRemoveComment } = useUpdateComment();

  return useMutation({
    mutationFn: ({ post_id, comment_id }: DeleteCommentRequest) =>
      CommentAPI.deleteComment({ post_id, comment_id }),
    onSuccess: (_, variables) => {
      const { post_id, comment_id } = variables;

      handleRemoveComment(post_id, comment_id);
    },
    onError: () => {},
  });
};
