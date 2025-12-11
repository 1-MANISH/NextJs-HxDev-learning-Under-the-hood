import { serverSideLogic } from "@/utils/server-utils"

const ServerComponent = () => {

        const result = serverSideLogic()
        console.log("Server Component Log:", result)
        return (
                <div>ServerComponent</div>
        )
}

export default ServerComponent