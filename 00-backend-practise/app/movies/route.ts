import { NextRequest } from "next/server";
import { movies } from "./db";

// export  async function GET(){
//         return new Response('Movies API')
// }

// export async function GET(){
//         return Response.json(movies)
// }


export async function POST(request:Request){
        const movie = await request.json()

        let currentMovies = [...movies]

        currentMovies.push(movie)

        return Response.json(currentMovies)
}


export async function GET(request:NextRequest){

        const queryParams = request.nextUrl.searchParams

        const genre = queryParams.get('genre')
        const ratingMin = queryParams.get('rating-min')
        const ratingMax = queryParams.get('rating-max')

        if(genre || ratingMin || ratingMax){
                let filteredMovies = movies.filter(movie =>
                        movie.genre === genre  && +movie.ratings >= +ratingMin && +movie.ratings <= +ratingMax) 
                
                return Response.json(filteredMovies)
        }
        else{
                return new Response('No Filters Applied')
        }
}