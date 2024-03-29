"use client";

import { FollowItem } from "../../_components";
import { useGetFollowList } from "../../_states";

type FollowingListPage = {
  params: {
    accountname: string;
  };
};

const FollowingListPage = ({ params }: FollowingListPage) => {
  const {
    data: followingList,
    isLoading,
    isError,
    isFetching,
    refetch,
  } = useGetFollowList("following", params.accountname);

  if (isLoading) return null;
  if (isError) return null;
  if (isFetching) return null;

  return (
    <>
      {followingList?.map((userInfo) => (
        <FollowItem key={userInfo._id} userInfo={userInfo} refetch={refetch} />
      ))}
    </>
  );
};

export default FollowingListPage;
