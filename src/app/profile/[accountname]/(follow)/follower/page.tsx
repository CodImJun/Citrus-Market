"use client";

import { FollowItem } from "../../_components";
import { useGetFollowList } from "../../_states";

type FollowerListPageProps = {
  params: {
    accountname: string;
  };
};

const FollowerListPage = ({ params }: FollowerListPageProps) => {
  const {
    data: followerList,
    isLoading,
    isError,
    isFetching,
    refetch,
  } = useGetFollowList("follower", params.accountname);

  if (isLoading) return null;
  if (isError) return null;
  if (isFetching) return null;

  return (
    <>
      {followerList?.map((userInfo) => (
        <FollowItem key={userInfo._id} userInfo={userInfo} refetch={refetch} />
      ))}
    </>
  );
};

export default FollowerListPage;
