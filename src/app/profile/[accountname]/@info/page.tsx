"use client";

import { useGetPersonalProfile } from "../_states";
import { ProfilePageProps } from "../page.types";
import { ProfileButtonSection, ProfileInfoSection } from "../_components";

const ProfileInfoPage = ({ params }: ProfilePageProps) => {
  const {
    data: profileInfo,
    refetch,
    isSuccess,
    isError,
    isLoading,
  } = useGetPersonalProfile(params.accountname);

  if (isLoading) return null;
  if (isError) return null;
  if (isSuccess)
    return (
      <section className="flex flex-col items-center py-[2.8rem]">
        <ProfileInfoSection
          followerCount={profileInfo.followerCount}
          followingCount={profileInfo.followingCount}
          image={profileInfo.image}
          username={profileInfo.username}
          accountname={profileInfo.accountname}
        />
        <ProfileButtonSection
          _id={profileInfo._id}
          isfollow={profileInfo.isfollow}
          accountname={params.accountname}
          refetch={refetch}
        />
      </section>
    );
};

export default ProfileInfoPage;
