import { Metadata } from 'next';
import React from 'react'

type GamePageProps = {
        params:{
                slug:string
        }
}

// dynamic metadata
export async function  generateMetadata({
        params
}:GamePageProps){
        const {slug:gameName} =await params

        return {
                title: `Game - ${gameName}`,
                description: `Details about the game ${gameName}`
        }
}




const Game = async  ({
        params
}:GamePageProps) => {

        const {slug : gameName} = await params;
  return (
    <div>
        <h2>Game: {gameName}</h2>
    </div>
  )
}

export default Game