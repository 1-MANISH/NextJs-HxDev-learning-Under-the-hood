import React from 'react'
import { Bebas_Neue } from 'next/font/google'

const bebas_neue = Bebas_Neue({
        variable: "--font-bebas-neue",
        subsets: ['latin'],
        weight: '400',
})

const Home = () => {
        return (
                <div>
                        <h1 className={`${bebas_neue.className}`}>Home</h1>
                </div>
        )
}

export default Home