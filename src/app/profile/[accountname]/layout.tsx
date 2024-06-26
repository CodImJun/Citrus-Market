import { Header, Navigation } from "@/_components";

const ProfilePageLayout = ({ children }: React.PropsWithChildren) => {
  return (
    <>
      <Header />
      <main className="flex flex-col pt-[4.8rem] pb-[6rem] min-h-full border-x-[0.1rem] border-solid border-grey-300">
        {children}
      </main>
      <Navigation />
    </>
  );
};

export default ProfilePageLayout;
