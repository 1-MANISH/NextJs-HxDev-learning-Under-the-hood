"use client"
import React from 'react'

const ErrorBoundary = ({error}:{error:Error}) => {
  return (
    <div>
        <h2 className='text-3xl font-bold text-red-600'>Something went wrong!</h2>
        <p>{error.message}</p>
    </div>
  )
}

export default ErrorBoundary