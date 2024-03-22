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
        <hr className="border-y-[0.3rem] border-grey-100" />
        {posts}
        <hr className="border-y-[0.3rem] border-grey-100" />
        {products}
      </main>
      <Navigation />
    </>
  );
};

export default ProfilePageLayout;
