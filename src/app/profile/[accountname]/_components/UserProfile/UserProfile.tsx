"use client";

import { useProfileQueries } from "../../_states";
import { UserPostSection } from "../UserPostSection";
import { UserProductSection } from "../UserProductSection";
import { UserProfileSection } from "../UserProfileSection";

export const UserProfile = ({ accountname }: { accountname: string }) => {
  const queryResults = useProfileQueries(accountname);
  const [getProfileQuery, getProductQuery, getPostQuery] = queryResults;

  const isFetching = queryResults.some((query) => query.isFetching);
  const isData = !(
    !getProfileQuery.data ||
    !getProductQuery.data ||
    !getPostQuery.data
  );

  if (isFetching) return null;
  if (!isData) return null;
  return (
    <>
      <UserProfileSection profileInfo={getProfileQuery.data} />
      <UserProductSection productList={getProductQuery.data} />
      <UserPostSection postList={getPostQuery.data} />
    </>
  );
};
