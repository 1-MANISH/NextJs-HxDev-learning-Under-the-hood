
const User = async  ({params} : {params : {userId : string}}) => {

        const {userId} = await params
        return (
                <div>
                        <h1>Info About {userId}</h1>
                        <p>Hello I&apos;m {userId}</p>
                </div>
        )
}

export default User