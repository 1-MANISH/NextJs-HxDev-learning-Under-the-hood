import Link from 'next/link'
import React from 'react'

const users = [
        { id: 1, name: 'John Doe' },
        { id: 2, name: 'Jane Smith' },
        { id: 3, name: 'Alice Johnson' },
]

const UsersList = () => {

        return (
                <div>
                        <h1>Users - </h1>

                        <ul>
                                {users.map(user => (
                                        <li key={user.id}>
                                                <Link href={`/userslist/${user.id}`}>
                                                        {user.name}
                                                </Link>
                                        </li>
                                ))}
                        </ul>
                </div>
        )
}

export default UsersList