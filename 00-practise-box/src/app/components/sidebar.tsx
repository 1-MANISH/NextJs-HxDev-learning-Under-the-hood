import Link from "next/link"


const Sidebar = () => {
        return (
        <aside className="w-64 bg-purple-200 p-4">
                <ul>
                        <li>
                                <Link
                                href="/category/technology"
                                className="block py-2 hover:bg-purple-300"
                        >
                                        Technology
                                </Link>
                        </li>
                        <li>
                                <Link
                                href="/category/design"
                                className="block py-2 hover:bg-purple-300"
                                >
                                        Design
                                </Link>
                        </li>
                        <li>
                        <Link
                                href="/category/business"
                                className="block py-2 hover:bg-purple-300"
                        >
                                Business
                                </Link>
                        </li>
                </ul>
            </aside>
        )
}

export default Sidebar