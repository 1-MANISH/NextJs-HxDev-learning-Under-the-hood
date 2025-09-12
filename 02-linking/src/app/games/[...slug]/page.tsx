interface pageProps{
        params: {slug:string[]}
}
const Game = async({params}: {params: pageProps}) => {

        const {slug} = await params

        return (
                <div>
                        {
                                slug.map((item, index) => (
                                        <p key={index}>{item}</p>
                                ))
                        }
                </div>
        )
}

export default Game