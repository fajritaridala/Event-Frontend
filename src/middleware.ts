import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { JWTExtended } from "./types/Auth";
import { getToken } from "next-auth/jwt";
import environment from "@/config/environments";

// Middleware to check if user is authenticated
export async function middleware(request: NextRequest) {
  const token: JWTExtended | null = await getToken({
    // JWTExtended is a custom type
    req: request,
    secret: environment.AUTH_SECRET,
  });

  // Get the path name
  const { pathname } = request.nextUrl;

  // Redirect to home if user is authenticated and trying to access login or register page
  if (pathname === "/auth/login" || pathname === "/auth/register") {
    if (token) {
      return NextResponse.redirect(new URL("/", request.url));
    }
  }

  // Redirect to admin dashboard if user is authenticated and trying to access admin dashboard
  if (pathname.startsWith("/admin")) {
    if (!token) {
      const url = new URL("/auth/login", request.url);
      url.searchParams.set("callbackUrl", encodeURI(request.url));
      return NextResponse.redirect(url);
    }
    // Redirect to member dashboard if user is authenticated and trying to access member dashboard
    if (token?.user?.role !== "admin") {
      return NextResponse.redirect(new URL("/", request.url));
    }
    // Redirect to admin dashboard if user is authenticated and trying to access /admin
    if (pathname === "/admin") {
      return NextResponse.redirect(new URL("/admin/dashboard", request.url));
    }
  }

  // Redirect to member dashboard if user is authenticated and trying to access member dashboard
  if (pathname.startsWith("/member")) {
    // Redirect to login page if user is not authenticated
    if (!token) {
      const url = new URL("/auth/login", request.url);
      url.searchParams.set("callbackUrl", encodeURI(request.url));
      return NextResponse.redirect(url);
    }

    // Redirect to admin dashboard if user is authenticated and trying to access /member
    if (pathname === "/member") {
      return NextResponse.redirect(new URL("/member/dashboard", request.url));
    }
  }
}

// Configuration for the middleware
export const config = {
  matcher: ["/auth/:path*", "/admin/:path*", "/member/:path*"],
};
