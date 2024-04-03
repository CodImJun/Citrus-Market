import { ProfileAPI } from "@/_apis";
import { queryKeys } from "@/_states";
import { UserType } from "@/_types";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useParams, usePathname } from "next/navigation";

export const useFollow = () => {
  const queryClient = useQueryClient();
  const pathname = usePathname();
  const params = useParams();

  const handleUpdateFollowStatus = (accountname: string, isfollow: boolean) => {
    if (pathname.includes("/follower")) {
      const followerListKey = queryKeys.profile.getFollowerList({
        accountname: params.accountname as string,
      });
      const currentFollowerData =
        queryClient.getQueryData<UserType[]>(followerListKey);

      const updatedFollowerData = currentFollowerData?.map((follower) =>
        follower.accountname === accountname
          ? { ...follower, isfollow: !isfollow }
          : follower
      );

      queryClient.setQueryData(followerListKey, updatedFollowerData);
    } else if (pathname.includes("/following")) {
      const followingListKey = queryKeys.profile.getFollowingList({
        accountname: params.accountname as string,
      });
      const currentFollowingData =
        queryClient.getQueryData<UserType[]>(followingListKey);

      const updatedFollowingData = currentFollowingData?.map((following) =>
        following.accountname === accountname
          ? { ...following, isfollow: !isfollow }
          : following
      );

      queryClient.setQueryData(followingListKey, updatedFollowingData);
    } else {
      const profileKey = queryKeys.profile.getPersonalProfile({
        accountname,
      });
      const currentProfileData = queryClient.getQueryData<UserType>(profileKey);

      if (currentProfileData)
        queryClient.setQueryData(profileKey, {
          ...currentProfileData,
          isfollow: !isfollow,
          followerCount: isfollow
            ? currentProfileData.followerCount - 1
            : currentProfileData.followerCount + 1,
        });
      queryClient.refetchQueries({
        queryKey: queryKeys.profile.getFollowerList({ accountname }),
        exact: true,
      });
    }
  };

  return useMutation({
    mutationFn: ({
      isfollow,
      accountname,
    }: {
      isfollow: boolean;
      accountname: string;
    }) => {
      if (isfollow) return ProfileAPI.unFollowUser({ accountname });
      else return ProfileAPI.followUser({ accountname });
    },
    onSuccess: (_, variables) => {
      const { isfollow, accountname } = variables;

      handleUpdateFollowStatus(accountname, isfollow);
    },
    onError: () => {},
  });
};
