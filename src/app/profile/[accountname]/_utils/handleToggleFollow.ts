import { ProfileAPI } from "@/_apis";
import { UseQueryResult } from "@tanstack/react-query";

type handleToggleFollowProps = {
  isfollow: boolean;
  accountname: string;
  refetch: UseQueryResult["refetch"];
};

export const handleToggleFollow = async ({
  isfollow,
  accountname,
  refetch,
}: handleToggleFollowProps) => {
  const action = isfollow ? ProfileAPI.unFollowUser : ProfileAPI.followUser;
  await action({ accountname });
  refetch();
};
