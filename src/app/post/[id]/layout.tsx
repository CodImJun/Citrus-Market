import { Header, MainLayout } from "@/_components";

const PostDetailPageLayout = ({ children }: React.PropsWithChildren) => {
  return (
    <>
      <Header />
      <MainLayout>{children}</MainLayout>
    </>
  );
};

export default PostDetailPageLayout;
