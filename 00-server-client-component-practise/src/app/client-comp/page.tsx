"use client"
import { clientSideLogic } from "@/utils/client-utils"

const ClientComponent = () => {

        const result = clientSideLogic()
        console.log("Client side log:", result)
        return (
                <div>ClientComponent</div>
        )
}

export default ClientComponent