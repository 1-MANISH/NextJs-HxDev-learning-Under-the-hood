import { NextRequest, NextResponse } from "next/server";

export function middleware(request:NextRequest){

        console.log("YHAA");
        
        // return NextResponse.redirect(new URL('/movies',request.url))
        return NextResponse.next()
}

export const config = {
        matcher: '/',
}