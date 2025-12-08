import Link from 'next/link'
import React from 'react'

const AdminHeader = () => {
  return (
   <header className="bg-blue-800 text-white p-4">
        <h1 className="text-2xl">Admin Panel</h1>
        <nav>
          <ul className="flex space-x-4">
            <li>
              <Link href="/admin/dashboard" className="hover:text-gray-300">
                Dashboard
              </Link>
            </li>
            <li>
              <Link href="/admin/users" className="hover:text-gray-300">
                Users
              </Link>
            </li>
            <li>
              <Link href="/admin/settings" className="hover:text-gray-300">
                Settings
              </Link>
            </li>
          </ul>
        </nav>
      </header>
  )
}

export default AdminHeader