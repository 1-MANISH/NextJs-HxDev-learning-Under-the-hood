import React from 'react'

// google fonts
import { Bebas_Neue } from 'next/font/google'

const bebasFont = Bebas_Neue({
        subsets:['latin'],
        weight:"400"
})

const Home = () => {
        return (
                <div>
                        <h1>Bebas Neue</h1>
                        <p className={`${bebasFont.className}`}>This is random text</p>
                </div>
        )
}

export default Home