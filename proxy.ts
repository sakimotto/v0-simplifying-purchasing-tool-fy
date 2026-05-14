import { NextResponse } from "next/server"
import type { NextRequest } from "next/server"

export default function proxy(request: NextRequest) {
  const { pathname } = request.nextUrl
  const token = request.cookies.get("authjs.session-token")

  // Public routes
  if (pathname === "/login") {
    if (token) return NextResponse.redirect(new URL("/dashboard", request.url))
    return NextResponse.next()
  }

  // Protected routes
  if (!token) {
    return NextResponse.redirect(new URL("/login", request.url))
  }

  return NextResponse.next()
}

export const config = {
  matcher: ["/((?!api|_next/static|_next/image|favicon.ico|placeholder).*)"],
}
