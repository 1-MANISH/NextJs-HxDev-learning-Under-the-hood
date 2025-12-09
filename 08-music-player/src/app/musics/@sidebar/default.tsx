import React from 'react'
import { Clock, Home, TrendingUp } from 'lucide-react'

const SideBarDefault = () => {
          return (
                        <aside
                        className='w-64 bg-[#111111] text-white p-4 flex flex-col justify-between  min-h-screen'
                        >       
                                <section>
                                        <h2 className='text-2xl font-bold'>MENU</h2>
                                        <nav className="mt-8">
                                                <ul>
                                                        <li className='mb-4 cursor-pointer hover:text-gray-400 flex items-center gap-4'>
                                                                <Home className='inline-block mr-2'/>
                                                                Discover
                                                        </li>
                                                        <li className='mb-4  cursor-pointer hover:text-gray-400 flex items-center gap-4'>
                                                                <TrendingUp className='inline-block mr-2'/>
                                                                Trending
                                                        </li>
                                                        <li className='mb-4  cursor-pointer hover:text-gray-400 flex items-center gap-4'>
                                                                <Clock className='inline-block mr-2'/>
                                                                Recent
                                                        </li>
                                                </ul>
                                        </nav>
                                </section>
        
                                <section>
                                        <h2 className="mt-6 text-xl font-bold">
                                                FAVORITE
                                        </h2>
                                 
                                        <ul className='mt-2 mb-[2rem] space-y-4'>
                                        {
                                                ['All', 'Rock', 'Hip Hop', 'Jazz', 'Classical', 'Pop', 'Country'].map((genre) => (
                                                      <div key={genre} className='flex mt-[2rem] gap-4'>
                                                                  <img src={"https://png.pngtree.com/thumb_back/fh260/background/20241019/pngtree-abstract-music-notes-on-blue-background-image_16297270.jpg"} alt='' className='w-10 h-10 '/>
                                                                        <div>
                                                                                <p className='text-white'> {genre}</p>
                                                                                <p className='text-gray-400 text-sm'> Person</p>
                                                                        </div>
                                                      </div>
        
                                                ))
                                        }
                                        </ul>
                                </section>
                        </aside>
                )
}

export default SideBarDefault