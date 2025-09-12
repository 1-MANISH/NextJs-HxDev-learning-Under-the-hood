import React from 'react'
import  "../globals.css"
import AdminHeader from '@/components/shared/AdminHeader'
import AdminSideBar from '@/components/shared/AdminSideBar'
const AdminLayout = ({children}:{children:React.ReactNode}) => {
        return (
                <div className='min-h-screen flex flex-col'>
                        <AdminHeader    />
                        <div className='flex flex-1'>
                                <AdminSideBar />
                                  <main className="flex-1 p-5 bg-white">
                                        {children}
                                  </main>
                        </div>
                        <footer className='bg-blue-800 text-white p-4'>
                                <p className='text-center'>&copy; 2023 My App. All rights reserved.</p>
                        </footer>
                </div>
        )
}

export default AdminLayout