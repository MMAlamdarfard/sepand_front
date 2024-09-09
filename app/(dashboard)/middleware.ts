// middleware.ts
import { NextRequest, NextResponse } from 'next/server';
import Me from '@/Api/me/me'

export async function middleware(req: NextRequest) {
  
  // Validate token with external Node.js server
  const response = await Me.getMe();

 
  if (response.status === 200) {
    // Token is valid, proceed to the next middleware or request handler
    return NextResponse.next();
  } else {
    // Token is invalid, redirect to login page
    const url = req.nextUrl.clone();
    url.pathname = '/login';
    return NextResponse.redirect(url);
  }
}

export const config = {
  matcher: ['/'], // Add all protected routes here
};