import React from 'react'

const About = () => {

        if(3<5){
                throw new Error("About page error...")
                return null
        }
        return (
                <div>About Page</div>
        )
}

export default About