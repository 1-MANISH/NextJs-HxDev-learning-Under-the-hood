"use client"
import React from 'react'

const ErrorBoundary = ({error}:{error:Error}) => {
        return (
                <div className='w-[96%] mx-auto px-4'>
                        <h2 className='text-3xl text-white mt-8 font-bold mb-6'>Error in song page</h2>
                        <p className='text-xl text-white'>{error.message}</p>
                </div>
        )
}

export default ErrorBoundary