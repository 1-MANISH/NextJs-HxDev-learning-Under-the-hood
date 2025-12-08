import Link from 'next/link'
import React, { ReactNode } from 'react'

const LoginLayout = ({children}:{
        children:ReactNode
}) => {
        return (
                <div>
                        <ul className='flex gap-4 p-6 bg-black text-white ' >
                                <li className='underline transition-all hover:translate-y-2 mx-4' >
                                        <Link href="/login">Login Main</Link>
                                </li>
                                <li className='underline hover:translate-y-2 mx-4'>
                                        <Link href="/login/loginuser">Login Regular User</Link>
                                </li>
                                <li className='underline hover:translate-y-2 mx-4'>
                                        <Link href="/login/loginadmin">Login Admin</Link>
                                </li>
                        </ul>
                        <div style={{border:'2px solid blue', padding:'10px', marginTop:'10px'}}>
                                {children}
                        </div>
                </div>
        )
}

export default LoginLayout