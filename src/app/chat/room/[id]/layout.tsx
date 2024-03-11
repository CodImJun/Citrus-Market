import { Header, MainLayout } from "@/_components";
import { ReplyBox } from "@/app/post/[id]/_components";

// TODO: Fix Chat Header, ReplyBox
const ChatRoomPageLayout = ({ children }: React.PropsWithChildren) => {
  return (
    <>
      <Header />
      <MainLayout additionalStyle="bg-grey-100">{children}</MainLayout>
      <ReplyBox profileImage="" />
    </>
  );
};

export default ChatRoomPageLayout;
