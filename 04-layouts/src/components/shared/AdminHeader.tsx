"use client"
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import React from 'react'

const AdminHeader = () => {

        const router = useRouter()
        return (
                   <header
                        className='bg-blue-800 text-white p-4'
                >
                        <h1 
                        className='bg-blue text-white p-4 cursor-pointer'
                        onClick={()=>router.push('/admin')}
                        >
                                Admin Panel
                                </h1>
                        <nav>
                                <ul className='flex space-x-4'>
                                        <li >
                                                <Link href={"/admin/dashboard"} className="hover:bg-purple-400"  >Dashboard</Link>
                                        </li>
                                        <li>
                                                <Link href={"/admin/users"} className="hover:bg-purple-400" >Users</Link>
                                        </li>
                                        <li>
                                                <Link href={"/admin/settings"} className="hover:bg-purple-400" >Settings</Link>
                                        </li>
                                </ul>
                        </nav>


                </header>
        )
}

export default AdminHeader