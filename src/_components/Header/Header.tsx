"use client";

import { usePathname, useSearchParams } from "next/navigation";

import { BackIcon, MoreIcon, SearchIcon } from "../Icon";
import { SearchBar } from "../SearchBar";
import { Button } from "../Button";

import {
  ChatHeaderProps,
  FollowHeaderProps,
  UploadHeaderProps,
} from "./Header.types";

export const Header = (props: {
  isValid?: boolean;
  uploadEvent?: () => void;
}) => {
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const CHAT_NAME = searchParams.get("chat-name") ?? "";

  switch (true) {
    default:
      return <BasicHeader />;
    case pathname === "/":
      return <MainHeader />;
    case pathname === "/search":
      return <SearchHeader />;
    case pathname.startsWith("/upload"):
      return (
        <UploadHeader
          buttonDisabled={props.isValid}
          uploadEvent={props.uploadEvent}
        />
      );
    case pathname === "/chat":
      return <ChatHeader chatName={CHAT_NAME} />;
    case pathname.includes("follow"):
      return <FollowHeader pathname={pathname} />;
  }
};

const HeaderLayout = ({
  children,
  ...rest
}: React.PropsWithChildren & React.HTMLAttributes<HTMLHeadElement>) => {
  return (
    <header
      className="fixed flex flex-row bg-white w-full max-w-[39rem] h-[4.8rem] items-center justify-between px-[1.6rem] border-b-[0.05rem] border-solid border-grey-300"
      {...rest}
    >
      {children}
    </header>
  );
};

const BasicHeader = () => {
  return (
    <HeaderLayout>
      <BackIcon />
      <MoreIcon />
    </HeaderLayout>
  );
};

const SearchHeader = () => {
  return (
    <HeaderLayout>
      <BackIcon />
      <SearchBar />
    </HeaderLayout>
  );
};

const MainHeader = () => {
  return (
    <HeaderLayout>
      <div className="leading-[4.8rem] text-18-500-22">감귤마켓 피드</div>
      <SearchIcon />
    </HeaderLayout>
  );
};

const UploadHeader = ({ buttonDisabled, uploadEvent }: UploadHeaderProps) => {
  return (
    <HeaderLayout>
      <BackIcon />
      <Button
        w="w-[9rem]"
        size="MS"
        disabled={buttonDisabled}
        onClick={uploadEvent}
      >
        업로드
      </Button>
    </HeaderLayout>
  );
};

const ChatHeader = ({ chatName }: ChatHeaderProps) => {
  return (
    <HeaderLayout>
      <div>
        <BackIcon />
        <span className="text-14-500-17.5">{chatName}</span>
      </div>
      <MoreIcon />
    </HeaderLayout>
  );
};

const FollowHeader = ({ pathname }: FollowHeaderProps) => {
  return (
    <header className="fixed flex gap-x-[0.8rem] bg-white w-full max-w-[39rem] h-[4.8rem] items-center px-[1.6rem] border-b-[0.05rem] border-solid border-grey-300 text-black text-14-400-17.5">
      <BackIcon />
      {pathname.includes("follower") ? "Follower" : "Following"}
    </header>
  );
};
