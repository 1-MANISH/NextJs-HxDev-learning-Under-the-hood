"use client"
import { useState } from "react";

const Movies = () => {

        const[movies,setMovies] = useState([]);

        // console.log(`This message is from the server component`);
        console.log(`This message is from the client component`);

        return (
                <div>Movies</div>
        )
}

export default Movies