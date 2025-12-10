import { Button } from "@/components/ui/button"
import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import Link from "next/link";

type Props = {
        id: number;
        name: string;
        price: string;
        image: string;
}

const ProductCard = ({id, name, price, image}: Props) => {
        return (

                <Link href={`/products/${id}`}>
                        <Card className="w-full max-w-sm max-h-[500px] " >
                                        <CardHeader>
                                                <CardTitle>{id} : {name}</CardTitle>
                                                <CardDescription>{price}</CardDescription>
                                        </CardHeader>
                                        <CardContent>
                                                <img src={image} alt={name} className="rounded-md mb-4" />
                                        </CardContent>
                                        <CardFooter>
                                                <Button className="w-full">Buy Now</Button>
                                        </CardFooter>
                        </Card>
               </Link>
        )
}

export default ProductCard