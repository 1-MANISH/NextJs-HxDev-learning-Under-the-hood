"use client"
import React from 'react'

const SingleSong = async ({params}:{params:{id:string}}) => {

         const songs  = [
                {
                        id:1,
                        title:"Song One",
                        artist:"Artist One",
                        time:"3:45"
                },
                {
                        id:2,
                        title:"Song Two",
                        artist:"Artist Two",
                        time:"3:45"
                },
                {
                        id:3,
                        title:"Song Three",
                        artist:"Artist Three",
                        time:"3:45"
                }
        ]

        const {id} = await params;

        const song = songs.find((song) => song.id.toString() === id);

        if(!song){
                throw new Error("Song not found");
        }
  return (
    <div>
        <h2 className='text-3xl text-white mt-8 font-bold mb-6'>Song Details</h2>
        <button onClick={() => history.back()} className='mb-4 px-4 py-2 bg-gray-700 text-white rounded-lg hover:bg-gray-600 transition-colors'>Go Back</button>
        <div className='bg-gray-800 p-6 rounded-lg'>
                <h3 className='text-2xl text-white font-semibold mb-4'>{song.title}</h3>
                <p className='text-gray-400'>Artist: {song.artist}</p>
                <p className='text-gray-400'>Duration: {song.time}</p>
        </div>
    </div>
  )
}

export default SingleSong