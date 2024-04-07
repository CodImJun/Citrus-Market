import { ProfileButtonSection } from "../ProfileButtonSection";
import { ProfileInfoSection } from "../ProfileInfoSection";
import { UserProfileSectionProps } from "./UserProfileSection.types";

export const UserProfileSection = ({
  profileInfo,
}: UserProfileSectionProps) => {
  return (
    <section className="flex flex-col items-center py-[2.8rem]">
      <ProfileInfoSection
        followerCount={profileInfo.followerCount}
        followingCount={profileInfo.followingCount}
        image={profileInfo.image}
        username={profileInfo.username}
        accountname={profileInfo.accountname}
        intro={profileInfo.intro}
      />
      <ProfileButtonSection
        _id={profileInfo._id}
        isfollow={profileInfo.isfollow}
        accountname={profileInfo.accountname}
      />
    </section>
  );
};
