import { Modal } from "@/_components";

export const GlobalLayout = ({ children }: React.PropsWithChildren) => {
  return (
    <div
      id="root"
      className="relative box-content w-[39rem] max-w-[39rem] h-full m-auto"
    >
      {children}
      <Modal />
    </div>
  );
};
