"use client";

import {
  UserPostSection,
  UserProductSection,
  UserProfileSection,
} from "./_components";
import { useProfileQueries } from "./_states";
import { ProfilePageProps } from "./page.types";

const ProfilePage = ({ params }: ProfilePageProps) => {
  const queryResults = useProfileQueries(params.accountname);
  const [getProfileQuery, getProductQuery, getPostQuery] = queryResults;
  getProfileQuery.refetch;

  if (queryResults.some((query) => query.isLoading)) return null;
  if (queryResults.some((query) => query.isError)) return null;

  if (!getProfileQuery.data) return null;
  if (!getProductQuery.data) return null;
  if (!getPostQuery.data) return null;

  return (
    <>
      <UserProfileSection
        profileInfo={getProfileQuery.data}
        params={params}
        refetch={getProfileQuery.refetch}
      />
      <UserProductSection productList={getProductQuery.data} />
      <UserPostSection postList={getPostQuery.data} />
    </>
  );
};

export default ProfilePage;
