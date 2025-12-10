"use client"
import React from 'react'

const ErrorBoundary = ({error}:{error:Error}) => {
        return (
        <div className='border p-[10rem] w-[30rem] border-black'>
                <h1 className='text-red-600'>Error</h1>
                <p>{error.message}</p>
        </div>
        )
}

export default ErrorBoundary