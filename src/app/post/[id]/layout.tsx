import { Header, MainLayout } from "@/_components";
import { ReplyBox } from "./_components";

const PostDetailPageLayout = ({ children }: React.PropsWithChildren) => {
  return (
    <>
      <Header />
      <MainLayout>{children}</MainLayout>
      <ReplyBox profileImage="" />
    </>
  );
};

export default PostDetailPageLayout;
