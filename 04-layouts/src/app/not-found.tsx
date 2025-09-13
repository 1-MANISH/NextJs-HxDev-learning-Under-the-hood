import Link from 'next/link'
import React from 'react'

const NotFound = () => {
        return (
        <div className='flex flex-col justify-center items-center h-screen'> 
                <h1 className='text-4xl mb-2'>404 Not found</h1>
                <p className='mb-4 text-amber-900'>The page you are looking for does not exist</p>

                <Link href={'/'} className='bg-amber-900 text-white px-4 py-2'>Go Home</Link>
        </div>
        )
}

export default NotFound