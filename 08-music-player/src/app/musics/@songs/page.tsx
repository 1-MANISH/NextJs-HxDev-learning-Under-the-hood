import { Clock, Heart } from 'lucide-react'
import Link from 'next/link';
import React from 'react'

const SongsList = async () => {

        await new Promise((resolve) => setTimeout(resolve, 3000)); // Simulate a delay for data fetching
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

        return (
                <div className='w-[96%] mx-auto px-4'>
                        <h2 className='text-3xl text-white mt-8 font-bold mb-6'>Songs Collections</h2>

                        <ul className='space-y-4 w-full'>
                        {
                              
                                songs.map((song)=>(
                                          <Link href={   `/musics/${song.id}`} key={song.id} className=' bg-gray-800 p-4 rounded-lg flex justify-between items-center hover:scale-105 transition-transform object-cover'>
                                        <li key={song.id} className='w-[100%] bg-gray-800 p-4 rounded-lg flex justify-between items-center' >
                                                <div className='flex'>
                                                        <img 
                                                                src={"https://png.pngtree.com/thumb_back/fh260/background/20241019/pngtree-abstract-music-notes-on-blue-background-image_16297270.jpg"} 
                                                                alt={song.title} 
                                                                className='w-16 h-16 rounded-md mr-4 inline-block '
                                                                />
                                                        <div>
                                                                <h3 className='text-xl text-white font-semibold'>{song.title}</h3>
                                                                <p className='text-gray-400'>{song.artist}</p>
                                                        </div>
                                                </div>
                                                <span className='text-gray-400 flex items-center gap-4'>
                                                        <div>
                                                                <Clock className='inline-block mr-2 h-4 w-4'/>
                                                                <span>{song.time}</span>
                                                        </div>
                                                        <span className=''>
                                                                <Heart className='inline-block h-5 w-5 text-red-500 hover:scale-110 transition-transform cursor-pointer'/>
                                                        </span>
                                                        <span>⋮</span>
                                                </span>
                                                
                                        </li>
                                         </Link>

                                ))
                        }

                          <Link href={   `/musics/${"sas"}`} key={"sd5"} className=' bg-gray-800 p-4 rounded-lg flex justify-between items-center hover:scale-105 transition-transform object-cover'>
                                        <li key={"sas"} className='w-[100%] bg-gray-800 p-4 rounded-lg flex justify-between items-center' >
                                                <div className='flex'>
                                                        <img 
                                                                src={"https://png.pngtree.com/thumb_back/fh260/background/20241019/pngtree-abstract-music-notes-on-blue-background-image_16297270.jpg"} 
                                                                alt={"Wrong"} 
                                                                className='w-16 h-16 rounded-md mr-4 inline-block '
                                                                />
                                                        <div>
                                                                <h3 className='text-xl text-white font-semibold'>{"Wrong"}</h3>
                                                                <p className='text-gray-400'>{"Wrong"}</p>
                                                        </div>
                                                </div>
                                                <span className='text-gray-400 flex items-center gap-4'>
                                                        <div>
                                                                <Clock className='inline-block mr-2 h-4 w-4'/>
                                                                <span>{"6:67"}</span>
                                                        </div>
                                                        <span className=''>
                                                                <Heart className='inline-block h-5 w-5 text-red-500 hover:scale-110 transition-transform cursor-pointer'/>
                                                        </span>
                                                        <span>⋮</span>
                                                </span>
                                                
                                        </li>
                                         </Link>
                        </ul>
                </div>
        )
}

export default SongsList