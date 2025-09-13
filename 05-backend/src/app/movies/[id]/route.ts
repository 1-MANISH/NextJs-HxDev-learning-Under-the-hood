import { movies } from "../db"

export async function GET(_req:Request,{params}:{params:{id:string}}){

        const {id} = await params
        const movie  = movies.find(movie => movie.id === +id)

        if(!movie) return new Response(JSON.stringify({
                error:"Movie not found",
                status:404,
                data:null
        }))

        return new Response(JSON.stringify({
                error:null,
                status:200,
                data:movie
        }))

}


export async function PATCH(req:Request,{params}:{params:{id:string}}){

        const {id} = await params
        
        const movie = movies.find(movie => movie.id === +id)
        if(!movie){
                return new Response(JSON.stringify({
                        error:'Movie not found'
                }),{status:404})
        }
        
        const m = await req.json()

       try {
                 const updatedMovie = {...movie,...m}
                movies[movies.indexOf(movie)] = updatedMovie
    
                return new Response(JSON.stringify(updatedMovie),{status:200})
       } catch (error) {
                 return new Response(JSON.stringify({
                        error:(error as Error).message
                }),{status:404})
       }

}


export async function DELETE(_req:Request,{params}:{params:{id:string}}){

        const {id} = await params
        const movie = movies.find(movie => movie.id === +id)
        if(!movie){
                return new Response(JSON.stringify({
                        error:'Movie not found'
                }),{status:404})
        }
        movies.splice(movies.indexOf(movie),1)
        return new Response(JSON.stringify({
                error:null,
                status:200,
                data:movie,
                message:"Movie deleted"
        }))
}