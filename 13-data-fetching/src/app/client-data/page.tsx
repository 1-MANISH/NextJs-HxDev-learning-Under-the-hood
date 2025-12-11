"use client"

import { useEffect, useState } from "react"

interface TodoType {
        id:number;
        userId:number;
        title:string;
        completed:boolean
}

const ClientData = () => {

        const [todo,setTodo] = useState<TodoType | null>(null)
        const [loading,setLoading] = useState<boolean>(true)
        const [error,setError] = useState<string | null>(null)

        useEffect(() => {
                
                const fetchData = async () => {
                        try {
                                setError(null)
                                const response = await fetch('https://jsonplaceholder.typicode.com/todos/1')
                                if(!response.ok){
                                        throw new Error('Failed to fetch data')
                                }
                                const data = await response.json()
                                setTodo(data)
                        } catch (error) {
                                setError((error as Error).message)      
                        }finally{
                                setLoading(false)
                        }
                }

                fetchData()
        },[])

        if(loading){
                return (
                        <div>Loading...</div>
                )
        }
        if(error){
                return (
                        <div>Todos Page error  : {error}</div>
                )
        }
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

export default ClientData