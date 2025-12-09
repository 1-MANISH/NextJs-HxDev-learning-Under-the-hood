"use client"
import React from 'react'

const ErrorBoundaryForComments = ({error}:{error:Error}) => {
        return (
        <div className='w-[300px] h-[500px] bg-purple-200'>
                <h1>Something went wrong in Comments Component</h1>
                <p>{error.message}</p>
        </div>
        )
}

export default ErrorBoundaryForComments