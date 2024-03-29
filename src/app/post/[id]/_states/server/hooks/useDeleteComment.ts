import { CommentAPI, DeleteCommentRequest } from "@/_apis";
import { queryKeys } from "@/_states";
import { useMutation, useQueryClient } from "@tanstack/react-query";

export const useDeleteComment = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: ({ post_id, comment_id }: DeleteCommentRequest) =>
      CommentAPI.deleteComment({ post_id, comment_id }),
    onSuccess: (data, variables) => {
      const { post_id } = variables;
      queryClient.invalidateQueries({ queryKey: [queryKeys.post, post_id] });
    },
    onError: () => {},
  });
};
