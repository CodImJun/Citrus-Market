import { ProfileButtonSection } from "../ProfileButtonSection";
import { ProfileInfoSection } from "../ProfileInfoSection";
import { UserProfileSectionProps } from "./UserProfileSection.types";

export const UserProfileSection = ({
  profileInfo,
  params,
  refetch,
}: UserProfileSectionProps) => {
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
