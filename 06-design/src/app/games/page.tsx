import Link from 'next/link'
import React from 'react'

export const metadata = {
        title:"Games page",
        description:"Games page description"
}

const Games = () => {
        return (
                <div>
                        <h1>Games</h1>
                        {
                                Array.from({length:10}).map((_,index) => <p><Link key={index} href={`/games/${index}`}>Game {index}</Link></p>)
                        }
                </div>
        )
}

export default Games