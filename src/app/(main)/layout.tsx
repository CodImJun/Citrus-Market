import { PropsWithChildren } from "react";
import { Header, MainLayout, Navigation } from "@/_components";

const MainPageLayout = ({ children }: PropsWithChildren) => {
  return (
    <>
      <Header />
      <MainLayout additionalStyle="gap-y-[2rem] h-[calc(100%-10.8rem)]">
        {children}
      </MainLayout>
      <Navigation />
    </>
  );
};

export default MainPageLayout;
