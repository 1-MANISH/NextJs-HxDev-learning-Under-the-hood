import React from 'react'

const ServerData = async () => {

        const response = await fetch('https://jsonplaceholder.typicode.com/toos/1')

        if(!response.ok){
                throw new Error('Failed to fetch data')
        }

        const todo = await response.json()
        
        return (
                <div>
                        <h1>Todo</h1>
                        <p>
                        <strong>ID:</strong> {todo?.id}
                        </p>
                        <p>
                        <strong>Title:</strong> {todo?.title}
                        </p>
                        <p>
                        <strong>Completed:</strong> {todo?.completed ? "Yes" : "No"}
                        </p>
                </div>
        )
}

export default ServerData