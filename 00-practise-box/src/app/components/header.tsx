import Link from 'next/link'


const Header = () => {
        return (
               <header className="bg-purple-800 text-white p-4">
                <nav>
                        <ul className="flex space-x-4">
                                <li>
                                        <Link href="/" className="hover:text-purple-400">
                                        Home
                                        </Link>
                                </li>
                                <li>
                                        <Link href="/about" className="hover:text-purple-400">
                                        About
                                        </Link>
                                </li>
                                <li>
                                        <Link href="/contact" className="hover:text-purple-400">
                                        Contact
                                        </Link>
                                </li>
                        </ul>
                </nav>
          </header>
        )
}

export default Header