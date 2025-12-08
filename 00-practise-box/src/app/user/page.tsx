import React from 'react'

const User = async () => {

        await new Promise(resolve => setTimeout(resolve, 2000))
        return (
                <div>User</div>
        )
}

export default User