import Link from 'next/link'
import React from 'react'

const Salaries = () => {
        return (
                <div className='w-[300px] h-[500px] bg-purple-200 relative'>
                        <h1>Salaries Component</h1>

                        <div className="absolute bottom-4 right-0">
                                <Link href="/members " className='bg-white p-2 rounded-md shadow-md'>
                                        back
                                </Link>
                        </div>
                </div>
        )
}

export default Salaries