import { PostAPI } from "@/_apis";
import { useQuery } from "@tanstack/react-query";

export const useGetMyPostList = (accountname: string) => {
  return useQuery({
    queryKey: [],
    queryFn: () => PostAPI.getMyPostList({ accountname }),
  });
};
