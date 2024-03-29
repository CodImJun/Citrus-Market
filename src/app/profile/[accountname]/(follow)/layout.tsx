import React from "react";

const ProfileFollowPageLayout = ({ children }: React.PropsWithChildren) => {
  return (
    <ul className="flex flex-col flex-1 gap-y-[1.6rem] px-[1.6rem] py-[2.4rem]">
      {children}
    </ul>
  );
};

export default ProfileFollowPageLayout;
