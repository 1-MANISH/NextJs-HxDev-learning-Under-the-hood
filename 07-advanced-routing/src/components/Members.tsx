import React from 'react'

const Members = async () => {

        await new Promise((res,rej)=>{
                setTimeout(() => {
                        res('Content is loading...')
                }, 3000)
        })

        return (
                <div className='border p-[10rem] w-[30rem] border-black'>
                        Members
                </div>
        )
}

export default Members