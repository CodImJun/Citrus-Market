import { ProfileAPI } from "@/_apis";
import { queryKeys } from "@/_states";
import { useQuery } from "@tanstack/react-query";

export const useGetFollowList = (
  type: "follower" | "following",
  accountname: string
) => {
  return useQuery({
    queryKey:
      type === "follower"
        ? queryKeys.profile.getFollowerList({ accountname })
        : queryKeys.profile.getFollowingList({ accountname }),
    queryFn: () => {
      if (type === "follower")
        return ProfileAPI.getFollowerList({ accountname });
      else if (type === "following")
        return ProfileAPI.getFollowingList({ accountname });
    },
    refetchOnWindowFocus: true,
  });
};
