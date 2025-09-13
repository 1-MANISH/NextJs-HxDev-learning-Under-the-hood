
// export async function GET(){
//         return new Response('Hello World')
// }

import { NextRequest } from "next/server";
import { movies } from "./db";


// export async function GET(){
//         return  Response.json(movies)
// }

export async function POST(req:Request){

        const movie = await req.json()
        const newMovie = {...movie}
        movies.push(newMovie)
        return new Response(JSON.stringify(newMovie))
}


export async function GET(request:NextRequest){
        const searchParams = request.nextUrl.searchParams
        const query = searchParams.get('query')
        
        const filteredMovies = movies.filter(movie => movie.name.toLowerCase().includes(query.toLowerCase()))

        return Response.json(filteredMovies)
}




