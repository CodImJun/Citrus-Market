import { ImageWithFallback } from "@/_components";
import { FollowCount } from "../FollowCount";
import { ProfileInfoSectionProps } from "./ProfileInfoSection.types";

export const ProfileInfoSection = ({
  followerCount,
  followingCount,
  image,
  username,
  accountname,
  intro,
}: ProfileInfoSectionProps) => {
  return (
    <>
      <div className="flex gap-x-[3.8rem] items-center mb-[1.6rem]">
        <FollowCount
          type="follower"
          count={followerCount}
          accountname={accountname}
        />
        <ImageWithFallback
          src={`${process.env.NEXT_PUBLIC_API_URL}/${image}`}
          alt="profile image"
          width={110}
          height={110}
          className="rounded-full w-[11rem] h-[11rem]"
          fallbackSrc="/basic-profile-img.png"
          priority
        />
        <FollowCount
          type="following"
          count={followingCount}
          accountname={accountname}
        />
      </div>
      <p className="text-16-700-20 text-black">{username}</p>
      <p className="text-12-400-14 text-grey-700 mt-[0.6rem]">@{accountname}</p>
      {intro && (
        <p className="text-14-400-17.5 text-grey-700 mt-[1.6rem]">{intro}</p>
      )}
    </>
  );
};
