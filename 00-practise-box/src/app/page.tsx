import Link from 'next/link'
import React from 'react'

const Home = () => {
        return (
                <div>
                        <h1>Home</h1>
                        <p>Welcome to the practise box!</p>
                        
                        <div className="flex gap-4 border-b-black">
                                <Link href="/about">About</Link>
                                <Link href="/contact">Contact</Link>
                        </div>
                </div>
        )
}

export default Home