"use client"
import Link from 'next/link'
import React, { useState } from 'react'

const Template = ({children}:{children:React.ReactNode}) => {

        const [name,setName] = useState("")
        return (
                <div>
                        <input
                                type="text"
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                                placeholder='Enter your name'
                        />

                        <Link href={`/games/revinue`}>Revinue</Link>
                        <Link href={`/games/stats`}>Stats</Link>
                        {children}
                </div>
        )
}

export default Template