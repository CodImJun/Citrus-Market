import { CommentAPI } from "@/_apis/comment";
import { useMutation } from "@tanstack/react-query";
import { useUpdateComment } from "./useUpdateComment";

export const useCreateCommentMutate = () => {
  const { handleAddComment } = useUpdateComment();

  return useMutation({
    mutationFn: ({ post_id, content }: { post_id: string; content: string }) =>
      CommentAPI.createComment({ post_id, content }),
    onSuccess: (data, variables) => {
      const { post_id } = variables;

      handleAddComment(post_id, data);
    },
    onError: () => {},
  });
};
