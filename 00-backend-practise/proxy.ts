import { NextRequest, NextResponse } from "next/server";

export async function proxy(request:NextRequest){

        console.log('Middleware executed for ',request.nextUrl.pathname )

        return NextResponse.redirect(new URL('/register',request.url))
}

export const config = {
        matcher:"/dashboard/:path*"
}