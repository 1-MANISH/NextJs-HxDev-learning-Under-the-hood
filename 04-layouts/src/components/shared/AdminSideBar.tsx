import Link from 'next/link'
import React from 'react'

const AdminSideBar = () => {
        return (
         <aside className="w-64 bg-blue-200 p-4">
                        <ul>
                                <li>
                                        <Link href={'/admin/dashboard'} className='block py-2 hover:bg-gray-300'>Dashboard</Link>
                                </li>
                                <li>
                                        <Link href={'/admin/users'} className='block py-2 hover:bg-gray-300'>Manage Users</Link>
                                </li>
                                <li>
                                        <Link href={'/admin/settings'} className='block py-2 hover:bg-gray-300'>Settings</Link>
                                </li>
                        </ul>
                </aside>
        )
}

export default AdminSideBar