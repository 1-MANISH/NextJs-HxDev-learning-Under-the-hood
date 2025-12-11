"use client"
import Password from "@/components/Password"
import Profile from "@/components/Profile"
import Setting from "@/components/Setting"

const Dashboard = () => {
        return (
                <div>
                        <Setting />
                        <Profile />
                        <Password />
                </div>
        )
}

export default Dashboard