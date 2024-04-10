import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { ACCESS_TOKEN_KEY } from "./_constants";

export function middleware(request: NextRequest) {
  const url = request.nextUrl.origin;
  const pathname = request.nextUrl.pathname;
  const isLoggedIn = request.cookies.get(ACCESS_TOKEN_KEY);

  const publicRoutes = ["/login", "/signup"];
  const isPublicRoute = publicRoutes.includes(pathname);

  if (isLoggedIn && isPublicRoute) {
    return NextResponse.redirect(url + "/");
  } else if (!isLoggedIn && !isPublicRoute) {
    return NextResponse.redirect(url + "/login");
  }
  return NextResponse.next();
}

export const config = {
  matcher: ["/((?!api|_next/static|_next/image|.*\\.png$).*)"],
};
