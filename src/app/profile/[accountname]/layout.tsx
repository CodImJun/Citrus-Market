import { Header, Navigation } from "@/_components";

type ProfilePageLayoutProps = {
  info: React.ReactNode;
  posts: React.ReactNode;
  products: React.ReactNode;
};

const ProfilePageLayout = ({
  info,
  posts,
  products,
}: ProfilePageLayoutProps) => {
  return (
    <>
      <Header />
      <main className="flex flex-col pt-[4.8rem] pb-[6rem]">
        {info}
        {products}
        {posts}
      </main>
      <Navigation />
    </>
  );
};

export default ProfilePageLayout;
