
import React from 'react'

async function UserProfile({ params }: { params: { userid: string } }) {
        
        const { userid } =  await params;

        return (
                <div>
                        <h1>User Profile - {userid}</h1>
                </div>
        )
}

export default UserProfile