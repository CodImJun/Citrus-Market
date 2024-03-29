import { UserType } from "@/_types";
import { UseQueryResult } from "@tanstack/react-query";

export type FollowItemProps = {
  userInfo: UserType;
  refetch: UseQueryResult["refetch"];
};
