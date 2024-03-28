import { UserType } from "@/_types";
import { UseQueryResult } from "@tanstack/react-query";

export type UserProfileSectionProps = {
  profileInfo: UserType;
  params: {
    accountname: string;
  };
  refetch: UseQueryResult["refetch"];
};
