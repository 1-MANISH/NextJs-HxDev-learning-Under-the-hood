import React from 'react'
import AdminHeader from '../components/adminHeader'
import AdminSidebar from '../components/adminSidebar'
import Footer from '../components/footer'
import AdminFooter from '../components/adminFooter'


const AdminLayout = ({children}:{children:React.ReactNode}) => {
        return (
                <div className="min-h-screen flex flex-col">
                        <AdminHeader />
                        <div className="flex flex-1">
                                <AdminSidebar />
                                <main className="flex-1 p-6 bg-gray-100">
                                       {children}
                                </main>
                        </div>
                        <AdminFooter />
                </div>
        )
}

export default AdminLayout