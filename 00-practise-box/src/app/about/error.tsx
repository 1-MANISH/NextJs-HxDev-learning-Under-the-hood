"use client"
import React from 'react'

const AboutErrorBoundary = ({error}:{error:Error}) => {
        return (
        <div>
                <h2 className='text-3xl font-bold text-red-600'>About Page Error!</h2>
                <p>{error.message}</p>
        </div>
        )
}

export default AboutErrorBoundary