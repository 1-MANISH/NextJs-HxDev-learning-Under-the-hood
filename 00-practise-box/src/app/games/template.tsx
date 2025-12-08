"use client"
import Link from 'next/link'
import React, { useState } from 'react'

type Props = {
    children: React.ReactNode
}

const GameLayout = ({ children }: Props) => {

        const [name, setName] = useState('')

        return (
                <div>
                        <input
                                type="text"
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                                placeholder="Enter your name"
                        />

                        <div className="flex gap-4 mt-6">
                                <Link href={'/games/revenue'}>Revenue</Link>
                                <Link href={'/games/stats'}>Stats</Link>
                        </div>

                        {children}
                </div>
        )
}

export default GameLayout