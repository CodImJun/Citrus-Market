import { PostAPI } from "@/_apis";
import { queryKeys } from "@/_states";
import { useInfiniteQuery } from "@tanstack/react-query";

export const useGetFollowingPostList = () => {
  return useInfiniteQuery({
    queryKey: queryKeys.post.getFollowingPostList(),
    queryFn: ({ pageParam }) =>
      PostAPI.getFollowingPostList({ limit: 5, skip: pageParam }),
    initialPageParam: 0,
    getNextPageParam: (lastPage) => {
      return lastPage.skip;
    },
    refetchOnWindowFocus: true,
  });
};
