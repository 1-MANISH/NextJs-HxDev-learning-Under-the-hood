import React from 'react'

const Dashboard = () => {

        if(2<5){
                throw new Error("Dashboard error...")
                return null
        }
        return (
        <div>Dashboard</div>
        )
}

export default Dashboard