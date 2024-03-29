"use client";

import { useAuthStore } from "@/_states";
import { usePathname, useRouter } from "next/navigation";
import { useEffect } from "react";

export const GlobalLayout = ({ children }: React.PropsWithChildren) => {
  const router = useRouter();
  const pathname = usePathname();
  const isLoggedIn = useAuthStore((state) => state.isLoggedIn);

  useEffect(() => {
    const publicRoutes = pathname === "/login" || pathname === "/signup";
    const privateRoutes = !publicRoutes;

    if (isLoggedIn && publicRoutes) router.push("/");
    else if (!isLoggedIn && privateRoutes) router.push("/login");
  }, [isLoggedIn, pathname, router]);

  return (
    <div className="relative box-content w-[39rem] max-w-[39rem] h-full m-auto border-x-[0.1rem] border-solid border-grey-300">
      {children}
    </div>
  );
};
