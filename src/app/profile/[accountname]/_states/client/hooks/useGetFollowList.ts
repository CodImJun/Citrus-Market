import { ProfileAPI } from "@/_apis";
import { queryKeys } from "@/_states";
import { useQuery } from "@tanstack/react-query";

export const useGetFollowList = (
  type: "follower" | "following",
  accountname: string
) => {
  return useQuery({
    queryKey: [queryKeys.profile, accountname],
    queryFn: () => {
      if (type === "follower")
        return ProfileAPI.getFollowerList({ accountname });
      else if (type === "following")
        return ProfileAPI.getFollowingList({ accountname });
    },
    refetchOnWindowFocus: true,
  });
};
