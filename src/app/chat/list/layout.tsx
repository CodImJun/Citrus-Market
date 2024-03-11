import { Header, MainLayout, Navigation } from "@/_components";

const ChatListPageLayout = ({ children }: React.PropsWithChildren) => {
  return (
    <>
      <Header />
      <MainLayout>{children}</MainLayout>
      <Navigation />
    </>
  );
};

export default ChatListPageLayout;
