import { products } from '@/db/products';
import React from 'react'

const SingleProduct = async({params}:{params:{productId:string}}) => {

        const {productId} = await params;

        const product = products.find(prod => prod.id === +productId);

        if(!product){
                return (
                        <div>Product not found</div>
                )
        }

        return (
         <div className="m-[4rem]">
                <h1 className="text-3xl mb-[1rem]">{product?.name}</h1>

                <img
                        src={product?.image}
                        alt={product?.name}
                        className="w-[40rem]"
                />

                <p className="text-2xl mt-[1rem]">Price: ${product?.price}</p>
                </div>
        )
}

export default SingleProduct