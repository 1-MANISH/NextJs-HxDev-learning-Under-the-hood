import { log } from 'console';
import React from 'react'

const Members = async () => {

        // await new Promise((resolve) => setTimeout(()=>{
        //         resolve(true)
        //         console.log("Members component loaded after 3 seconds")
        // }, 3000));
        return (
                <div className='w-[300px] h-[500px] bg-purple-200'>
                        <h1>Members you can see here</h1>
                </div>
        )
}

export default Members