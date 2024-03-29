import { CommentAPI } from "@/_apis/comment";
import { queryKeys } from "@/_states";
import { useMutation, useQueryClient } from "@tanstack/react-query";

export const useCreateCommentMutate = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: ({ post_id, content }: { post_id: string; content: string }) =>
      CommentAPI.createComment({ post_id, content }),
    onSuccess: (data, variables) => {
      const { post_id } = variables;
      queryClient.invalidateQueries({ queryKey: [queryKeys.post, post_id] });
    },
    onError: () => {},
  });
};
