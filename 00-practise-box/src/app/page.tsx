
"use client"
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import React from 'react'

const Home = () => {

        const router = useRouter()
        return (
                <div>
                        <h1>Home</h1>
                        <p>Welcome to the practise box!</p>
                        
                        <div className="flex gap-4 border-b-black">
                                {/* <Link href="/about">About</Link>
                                <Link href="/contact">Contact</Link> */}
                                {/* <button onClick={() => router.push('/about')}>About</button>
                                <button onClick={() => router.push('/login')}>Login</button>
                                <button onClick={() => router.push('/contact')}>Contact</button> */}
                                <button onClick={() => router.push('/page1')}>Page1</button> 
                                
                        </div>
                </div>
        )
}

export default Home