import { queryKeys } from "@/_states";
import { CommentType } from "@/_types/comment";
import { useQueryClient } from "@tanstack/react-query";

export const useUpdateComment = () => {
  const queryClient = useQueryClient();

  const handleAddComment = (post_id: string, newComment: CommentType) => {
    const currentComments = queryClient.getQueryData<CommentType[]>(
      queryKeys.comment.getCommentList({
        post_id,
      })
    );

    if (currentComments) {
      const updatedComments = [...currentComments, newComment];

      queryClient.setQueryData(
        queryKeys.comment.getCommentList({ post_id }),
        updatedComments
      );
    }
  };

  const handleRemoveComment = (post_id: string, comment_id: string) => {
    const currentComments = queryClient.getQueryData<CommentType[]>(
      queryKeys.comment.getCommentList({ post_id })
    );

    if (currentComments) {
      const updatedComments = currentComments.filter(
        (comment) => comment.id !== comment_id
      );

      queryClient.setQueryData(
        queryKeys.comment.getCommentList({ post_id }),
        updatedComments
      );
    }
  };

  return {
    handleAddComment,
    handleRemoveComment,
  };
};
