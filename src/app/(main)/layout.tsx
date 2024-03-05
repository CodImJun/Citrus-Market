import { PropsWithChildren } from "react";
import { Header, Navigation } from "@/_components";

const MainPageLayout = ({ children }: PropsWithChildren) => {
  return (
    <>
      <Header />
      <main className="flex flex-col gap-y-[2rem] h-[calc(100%-10.8rem)]">
        {children}
      </main>
      <Navigation />
    </>
  );
};

export default MainPageLayout;
