import { Header, MainLayout, Navigation } from "@/_components";

const SearchPageLayout = ({ children }: React.PropsWithChildren) => {
  return (
    <>
      <Header />
      <MainLayout>{children}</MainLayout>
      <Navigation />
    </>
  );
};

export default SearchPageLayout;
