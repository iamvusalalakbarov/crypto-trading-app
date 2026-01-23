import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function proxy(request: NextRequest) {
  const isLoggedIn = request.cookies.get("isLoggedIn")?.value === "true";
  const isTradePage = request.nextUrl.pathname.startsWith("/trade");

  if (isTradePage && !isLoggedIn) {
    return NextResponse.redirect(new URL("/", request.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/trade/:path*"],
};
