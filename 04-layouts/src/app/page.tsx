import React from 'react'
import HomeImage from '../../public/ggaller.jpg'
import Image from 'next/image'

const Home = () => {
        return (
                <div>
                        <h1>Home</h1>
                        {/* <img src={HomeImage.src} alt="Home" /> */}

                        <Image
                                src={HomeImage}
                                alt="Home image"
                                width={500}
                                height={500}
                        />

                          <Image
                                src={'https://images.unsplash.com/photo-1544894079-e81a9eb1da8b?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fGZyZWUlMjBpbWFnZXN8ZW58MHx8MHx8fDA%3D'}
                                alt="Home image"
                                width={500}
                                height={500}
                        />
                </div>
        )
}

export default Home