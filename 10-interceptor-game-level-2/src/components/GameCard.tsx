import React from 'react'

type Props = {
        game:{
                id:number;
                name:string;
                image:string;
        }
}

const GameCard = ({game}:Props) => {
        return (
         <div className="bg-gray-800  text-white p-4 rounded-lg shadow-md">
                <img
                        src={game.image}
                        alt={game.name}
                        className="w-full h-32 object-cover rounded-md"
                />
                <h3 className="mt-2 text-lg font-semibold">{game.name}</h3>
        </div>
        )
}

export default GameCard