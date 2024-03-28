import { ProfileAPI } from "@/_apis";
import { Button } from "@/_components";
import { useAuthStore } from "@/_states";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { ProfileButtonSectionProps } from "./ProfileButtonSection.types";

export const ProfileButtonSection = ({
  _id,
  isfollow,
  accountname,
  refetch,
}: ProfileButtonSectionProps) => {
  const router = useRouter();
  const loginID = useAuthStore((state) => state.loginInfo._id);

  const handleToggleFollow = async () => {
    const action = isfollow ? ProfileAPI.unFollowUser : ProfileAPI.followUser;
    await action({ accountname });
    refetch();
  };

  return (
    <div className="flex gap-x-[1rem] mt-[2.4rem]">
      {loginID === _id ? (
        <>
          <Button
            size="M"
            w="w-[12rem]"
            active={true}
            onClick={() => router.push("/edit/profile")}
          >
            프로필 수정
          </Button>
          <Button
            size="M"
            w="w-[10rem]"
            active={true}
            onClick={() => router.push("/upload/post")}
          >
            상품 등록
          </Button>
        </>
      ) : (
        <>
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
          {!isfollow ? (
            <Button
              size="M"
              w="w-[12rem]"
              active={false}
              onClick={handleToggleFollow}
            >
              팔로우
            </Button>
          ) : (
            <Button
              size="M"
              w="w-[12rem]"
              active={true}
              onClick={handleToggleFollow}
            >
              언팔로우
            </Button>
          )}
          <button
            type="button"
            className="flex items-center justify-center w-[3.4rem] h-[3.4rem] rounded-full border-[0.1rem] border-solid border-grey-300"
          >
            <Image src="/icon-share.png" alt="share" width={20} height={20} />
          </button>
        </>
      )}
    </div>
  );
};
