import React from 'react'

const Comments = () => {

        if(2<5){
                throw new Error('Error : in comments page')
        }
        return (
                <div className='border p-[10rem] w-[30rem] border-black'> 
                        Comments
                </div>
        )
}

export default Comments