"use client"
import React from 'react'

const ErrorBoundaryForComments = ({error}:{error:Error}) => {
        return (
        <div>
                <h1>Something went wrong in Comments Component</h1>
                <p>{error.message}</p>
        </div>
        )
}

export default ErrorBoundaryForComments