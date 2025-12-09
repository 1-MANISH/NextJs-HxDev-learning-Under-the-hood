import { log } from 'console';
import Link from 'next/link';
import React from 'react'

const Members = async () => {

        await new Promise((resolve) => setTimeout(()=>{
                resolve(true)
                console.log("Members component loaded after 3 seconds")
        }, 2000));
        return (
                <div className='w-[300px] h-[500px] bg-purple-200 relative'>
                        <h1>Members you can see here</h1>

                        <div className="absolute bottom-4 right-0">
                                <Link href="/members/salaries " className='bg-white p-2 rounded-md shadow-md'>
                                        Salaries
                                </Link>
                        </div>
                </div>
        )
}

export default Members