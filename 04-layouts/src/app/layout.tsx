import Header from "@/components/shared/Header"
import "./globals.css"
import SideBar from "@/components/shared/SideBar"
import Footer from "@/components/shared/Footer"
const BaseLayout  = (
        {children}:{children:React.ReactNode}
) => {
        return (
                <html>
                        <head>
                                <title>Base Layout</title>
                        </head>
                        <body>
                                <div className="min-h-screen flex flex-col">
                                        <Header />
                                        <div className="flex flex-1">
                                                <SideBar />
                                                 <main className="flex-1 p-5 bg-white">
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