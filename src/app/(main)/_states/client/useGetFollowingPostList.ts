import { PostAPI } from "@/_apis";
import { queryKeys } from "@/_states/server";
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
    queryKey: [queryKeys.post],
    queryFn: () => PostAPI.getFollowingPostList(),
  });
};
