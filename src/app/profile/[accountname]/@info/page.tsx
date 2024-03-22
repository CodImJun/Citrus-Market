"use client";

import Image from "next/image";
import { Button, ImageWithFallback } from "@/_components";
import { Follow } from "@/_components";
import { useGetPersonalProfile } from "../_states";
import { ProfilePageProps } from "../page.types";

const ProfileInfoPage = ({ params }: ProfilePageProps) => {
  const {
    data: profileInfo,
    isSuccess,
    isError,
    isLoading,
  } = useGetPersonalProfile(params.accountname);

  if (isLoading) return null;
  if (isError) return null;
  if (isSuccess)
    return (
      <section className="flex flex-col items-center py-[2.8rem]">
        <div className="flex gap-x-[3.8rem] items-center mb-[1.6rem]">
          <Follow type="follower" count={profileInfo.followerCount} />
          <ImageWithFallback
            src={profileInfo.image}
            alt="profile image"
            width={110}
            height={110}
            className="rounded-full"
            fallbackSrc="/basic-profile-img.png"
          />
          <Follow type="following" count={profileInfo.followingCount} />
        </div>
        <p className="text-16-700-20 text-black">{profileInfo.username}</p>
        <p className="text-12-400-14 text-grey-700 mt-[0.6rem] mb-[1.6rem]">
          @{profileInfo.accountname}
        </p>
        <p className="text-14-400-17.5 text-grey-700">{profileInfo.intro}</p>
        <div className="flex gap-x-[1rem] mt-[2.4rem]">
          <button
            type="button"
            className="flex items-center justify-center w-[3.4rem] h-[3.4rem] rounded-full border-[0.1rem] border-solid border-grey-300"
          >
            <Image
              src="/icon-message-circle.png"
              alt="chat"
              width={20}
              height={20}
            />
          </button>
          <Button size="M" w="w-[12rem]" active={profileInfo.isfollow}>
            {profileInfo.isfollow ? "언팔로우" : "팔로우"}
          </Button>
          <button
            type="button"
            className="flex items-center justify-center w-[3.4rem] h-[3.4rem] rounded-full border-[0.1rem] border-solid border-grey-300"
          >
            <Image src="/icon-share.png" alt="share" width={20} height={20} />
          </button>
        </div>
      </section>
    );
};

export default ProfileInfoPage;
