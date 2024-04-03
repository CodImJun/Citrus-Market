import { Button, ImageWithFallback } from "@/_components";
import { FollowItemProps } from "./FollowItem.types";
import Link from "next/link";
import { useFollow } from "@/_hooks/useFollow";

export const FollowItem = ({ userInfo }: FollowItemProps) => {
  const { image, accountname, username, intro, isfollow } = userInfo;
  const { mutate: handleFollow } = useFollow();

  return (
    <li className="flex items-center w-full h-[5rem]">
      <Link
        href={`/profile/${accountname}`}
        className="flex gap-x-[1.2rem] items-center w-full mr-[1.2rem]"
      >
        <ImageWithFallback
          src={`${process.env.NEXT_PUBLIC_API_URL}/${image}`}
          fallbackSrc="/basic-profile-img.png"
          alt="profile image"
          width={50}
          height={50}
          className="w-[5rem] h-[5rem] rounded-full"
          priority
        />
        <div className="flex flex-col flex-1 gap-y-[0.6rem]">
          <p className="text-black text-14-500-17.5">{username}</p>
          <p className="text-grey-700 text-12-400-15">
            {intro ?? "소개가 없습니다"}
          </p>
        </div>
      </Link>
      {userInfo.isfollow ? (
        <Button
          size="S"
          w="w-[5.6rem]"
          active={true}
          onClick={() => handleFollow({ accountname, isfollow })}
        >
          취소
        </Button>
      ) : (
        <Button
          size="S"
          w="w-[5.6rem]"
          onClick={() => handleFollow({ accountname, isfollow })}
        >
          팔로우
        </Button>
      )}
    </li>
  );
};
