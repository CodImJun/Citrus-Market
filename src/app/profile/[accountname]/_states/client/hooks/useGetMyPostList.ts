import { PostAPI } from "@/_apis";
import { queryKeys } from "@/_states";
import { useQuery } from "@tanstack/react-query";

export const useGetMyPostList = (accountname: string) => {
  return useQuery({
    queryKey: [queryKeys.post, accountname],
    queryFn: () => PostAPI.getMyPostList({ accountname }),
  });
};
