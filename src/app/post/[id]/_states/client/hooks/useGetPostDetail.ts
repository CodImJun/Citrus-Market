import { PostAPI } from "@/_apis";
import { queryKeys } from "@/_states";
import { useQuery } from "@tanstack/react-query";

export const useGetPostDetail = ({ post_id }: { post_id: string }) => {
  return useQuery({
    queryKey: [queryKeys.post, post_id],
    queryFn: () => PostAPI.getPostDetail({ post_id }),
  });
};
