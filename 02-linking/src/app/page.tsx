
"use client"
import Link from 'next/link'
import {useRouter} from 'next/navigation'

const Home = () => {
        const router = useRouter()

        return (
                <main>
                        <h1>Welcome to the Home Page</h1>
                       <p>This is the landing page of the website. Feel free to explore!</p>
                       <Link href="/dashboard">
                            Go to Dashboard
                       </Link>

                        <button onClick={() => router.push('/dashboard/profile')}> Profile</button>
                        <button onClick={() => router.push('/dashboard/settings')}> Settings</button>
                </main>
        )
}

export default Home



// ----------------------------------------
// import Link from 'next/link'


// const Home = () => {
//         return (
//                 <div>
//                         <h1>Welcome to the Home Page</h1>
//                         <p>This is the landing page of the website. Feel free to explore!</p>
//                         <Link href="/dashboard">
//                                 Go to Dashboard
//                         </Link>
//                 </div>
//         )
// }

// export default Home