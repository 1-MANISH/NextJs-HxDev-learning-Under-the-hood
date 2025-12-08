import { movies } from "../db"

export async function GET(_request:Request,{params}:{params:{id:string}}){

        const {id} =await params

        const movie = movies.find(mv=>mv.id===+id)

        if(!movie)
                return new Response('Movie Not Found',{status:404})

        return Response.json(movie)

}

export async function PATCH(request:Request,{params}:{params:{id:string}}){
        const {id} = await params  

        const movie = movies.find(mv=>mv.id===+id)

       const m = await request.json()

        if(!movie) return new Response('Movie Not Found',{status:404})

        try {
                 const updatedMovie = {...movie,...m}
                movies[movies.indexOf(movie)] = updatedMovie
    
                return new Response(JSON.stringify(movies),{status:200})
       } catch (error) {
                 return new Response(JSON.stringify({
                        error:(error as Error).message
                }),{status:404})
       }
        
}

export async function  DELETE(_request:Request,{params}:{params:{id:string}}){
        const {id} = await params

        const movieId = +id

        const movieIndex = movies.findIndex(mv=>mv.id===movieId)

        if(movieIndex===-1) return new Response('Movie Not Found',{status:404})

        try {
                movies.splice(movieIndex,1)


                return new Response(JSON.stringify(movies),{status:200})
        } catch (error) {
                return new Response(JSON.stringify({
                        error:(error as Error).message
                }),{status:404})
        }

}
