export const MainLayout = ({
  children,
  additionalStyle,
}: {
  children: React.ReactNode;
  additionalStyle?: string;
}) => {
  return (
    <main
      className={`flex flex-col w-full h-full pt-[4.8rem] pb-[6rem] ${additionalStyle}`}
    >
      {children}
    </main>
  );
};
