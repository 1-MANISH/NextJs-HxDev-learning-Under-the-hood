import { Metadata } from 'next'
import Link from 'next/link'
import React from 'react'
import Card from '../components/card'

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
        <div className='flex gap-4 my-4'>
            {
                games.map((game) => (
                <Link key={game.id} href={`/games/${game.name.toLowerCase()}`}>
                                <Card>{game.name}</Card> 
                </Link>
                ))
            }
        </div>
    </div>
  )
}

export default Games