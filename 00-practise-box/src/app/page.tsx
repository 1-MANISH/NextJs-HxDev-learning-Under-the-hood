import Image from "next/image"
import techImage from "../../public/assets/images/tech.webp"
const Home = () => {
        return (
                <div>
                        <h1>Home page</h1>
                        <br />

                        {/* <img src={techImage.src} alt="Tech Image" width={500} /> */}
                        {/* <Image
                                src={techImage}
                                alt="Tech Image"
                                width={500}
                        /> */}
                        <Image
                                src={'https://cdn.pixabay.com/photo/2025/11/28/16/07/frost-9983255_1280.jpg'}
                                alt="Image"
                                width={500}
                                height={300}
                        />


                </div>
        )
}

export default Home