import { PostAPI } from "@/_apis";
import { queryKeys } from "@/_states";
import { useQuery } from "@tanstack/react-query";

export const useGetFollowingPostList = () => {
  // useInfiniteQuery({
  //   queryKey: ["projects"],
  //   initialPageParam: 1,
  //   queryFn: ({ pageParam }) =>
  //     PostAPI.getFollowingPostList({ skip: pageParam }),
  //   getNextPageParam: (lastPage) => lastPage.,
  // });

  return useQuery({
    queryKey: queryKeys.post.getFollowingPostList(),
    queryFn: () => PostAPI.getFollowingPostList(),
  });
};
