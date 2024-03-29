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

  const isLoading = queryResults.some((query) => query.isLoading);
  const isError = queryResults.some((query) => query.isError);
  const isFetching = queryResults.some((query) => query.isFetching);
  const isData = !(
    !getProfileQuery.data ||
    !getProductQuery.data ||
    !getPostQuery.data
  );

  if (isLoading) return null;
  if (isError) return null;
  if (isFetching) return null;
  if (isData)
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
