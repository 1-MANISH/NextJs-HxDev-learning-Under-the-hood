import Link from 'next/link'
import React from 'react'

const Users = () => {
        return (
                 <div>
                         <h1>Users</h1>
                         <p>This is the users page.</p>
                          <ul>
                                <li>
                                         <Link href="/users/alex">Alex</Link>
                                </li>
                                <li>
                                        <Link href="/users/jordan">Jordan</Link>
                                </li>
                                <li>
                                        <Link href="/users/huxn">HuXn</Link>
                                </li>
                                <li>
                                        <Link href="/users/john">John</Link>
                                </li>
                        </ul>
                 </div>
        )
}

export default Users