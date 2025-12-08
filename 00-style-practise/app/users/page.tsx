import { Metadata } from 'next'
import React from 'react'

export const metadata:Metadata = {
        title: "Users Page",
        description: "This is users page",
        icons:{
                icon: '/file.svg'
        }
}

const UsersPage = () => {
        return (
                <div>UsersPage</div>
        )
}

export default UsersPage