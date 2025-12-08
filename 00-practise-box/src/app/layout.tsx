import React, { ReactNode } from 'react'
import Header from './components/header'
import Sidebar from './components/sidebar'
import Footer from './components/footer'
import "./globals.css"

const BaseLayout = ({children}:{children:ReactNode}) => {
        return (
                <html>
                        <body>
                                <div className="min-h-screen flex flex-col">
                                        <Header />
                                        <div className="flex flex-1">
                                                <Sidebar />

                                                <main className="flex-1 p-6 bg-white">
                                                       {children}
                                                </main>
                                        </div>
                                        <Footer />
                                </div>
                        </body>
                </html>
        )
}

export default BaseLayout