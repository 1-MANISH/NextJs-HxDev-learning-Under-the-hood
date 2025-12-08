import { Metadata } from 'next'
import React from 'react'


export const metadata:Metadata = {
        title: "About Page",
        description: "This is about page",
        icons:{
                icon: '/window.svg'
        }
}

const AboutPage = () => {
        return (
                <div>AboutPage</div>
        )
}

export default AboutPage