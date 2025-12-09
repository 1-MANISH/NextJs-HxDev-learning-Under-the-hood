import React from 'react'

const Comments = () => {

        if(true){
                throw new Error("Error in Comments Component")
                return null
        }
        return (
                <div className='w-[300px] h-[500px] bg-amber-100'>
                        <h1>Comments you can see here</h1>
                </div>
        )
}

export default Comments