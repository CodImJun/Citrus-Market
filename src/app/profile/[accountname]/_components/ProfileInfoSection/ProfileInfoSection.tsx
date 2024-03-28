import { ImageWithFallback } from "@/_components";
import { FollowCount } from "../FollowCount";
import { ProfileInfoSectionProps } from "./ProfileInfoSection.types";

export const ProfileInfoSection = ({
  followerCount,
  followingCount,
  image,
  username,
  accountname,
}: ProfileInfoSectionProps) => {
  return (
    <>
      <div className="flex gap-x-[3.8rem] items-center mb-[1.6rem]">
        <FollowCount type="follower" count={followerCount} />
        <ImageWithFallback
          src={image}
          alt="profile image"
          width={110}
          height={110}
          className="rounded-full"
          fallbackSrc="/basic-profile-img.png"
          priority
        />
        <FollowCount type="following" count={followingCount} />
      </div>
      <p className="text-16-700-20 text-black">{username}</p>
      <p className="text-12-400-14 text-grey-700 mt-[0.6rem]">@{accountname}</p>
      {/* API에서 intro를 보내주지 않습니다 */}
      {/* <p className="text-14-400-17.5 text-grey-700">{profileInfo.intro}</p> */}
    </>
  );
};
