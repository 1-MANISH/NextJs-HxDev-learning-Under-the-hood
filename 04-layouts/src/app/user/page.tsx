"use client"
import React from 'react'
import {redirect} from "next/navigation"
const User = async() => {

        // redirect('/')

        await new Promise((res,rej)=>{
                setTimeout(() => {
                        res(true)
                }, 3000);
        })

        return (
                <div>
                        <h1>User</h1>
                        <button onClick={() => redirect("/")}>Logout</button>
                </div>
        )
}

export default User