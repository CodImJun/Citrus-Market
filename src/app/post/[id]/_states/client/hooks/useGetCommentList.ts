import { CommentAPI } from "@/_apis/comment";
import { queryKeys } from "@/_states";
import { useQuery } from "@tanstack/react-query";

export const useGetCommentList = (post_id: string) => {
  return useQuery({
    queryKey: queryKeys.comment.getCommentList({ post_id }),
    queryFn: () => CommentAPI.getCommentList({ post_id }),
    staleTime: 60 * 10 * 1000,
  });
};
