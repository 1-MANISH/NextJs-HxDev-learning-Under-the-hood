import { Metadata } from 'next'
import Link from 'next/link'
import React from 'react'

export const metadata:Metadata = {
        title: 'Games List',
        description: 'List of available games'
}

const Games = () => {

        const games = [{
                id:1,
                name:'FIFA'
        },{
                id:2,
                name:'GTA'
        },{
                id:3,
                name:'Minecraft'
        }]
  return (
    <div>
        <h1>Games</h1>
        <ul>
            {
                games.map((game) => (
                <Link key={game.id} href={`/games/${game.name.toLowerCase()}`}>
                                <li>{game.name}</li> 
                </Link>
                ))
            }
        </ul>
    </div>
  )
}

export default Games