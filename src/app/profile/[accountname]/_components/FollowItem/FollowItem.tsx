import { Button, ImageWithFallback } from "@/_components";
import { FollowItemProps } from "./FollowItem.types";
import { handleToggleFollow } from "../../_utils";
import Link from "next/link";

export const FollowItem = ({ userInfo, refetch }: FollowItemProps) => {
  const handleFollowButtonClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.stopPropagation();

    handleToggleFollow({
      isfollow: userInfo.isfollow,
      accountname: userInfo.accountname,
      refetch,
    });
  };

  return (
    <li className="flex items-center w-full h-[5rem]">
      <Link
        href={`/profile/${userInfo.accountname}`}
        className="flex gap-x-[1.2rem] items-center w-full mr-[1.2rem]"
      >
        <ImageWithFallback
          src={userInfo.image}
          fallbackSrc="/basic-profile-img.png"
          alt="profile image"
          width={50}
          height={50}
          priority
        />
        <div className="flex flex-row flex-1 items-center gap-y-[0.6rem]">
          <p className="text-black text-14-500-17.5">{userInfo.username}</p>
          <p className="text-grey-700 text-12-400-15">{userInfo.intro}</p>
        </div>
      </Link>
      {userInfo.isfollow ? (
        <Button
          size="S"
          w="w-[5.6rem]"
          active={true}
          onClick={handleFollowButtonClick}
        >
          취소
        </Button>
      ) : (
        <Button size="S" w="w-[5.6rem]" onClick={handleFollowButtonClick}>
          팔로우
        </Button>
      )}
    </li>
  );
};
