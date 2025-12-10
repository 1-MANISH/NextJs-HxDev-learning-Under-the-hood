import ProductInterceptorDialog from '@/components/shared/ProductInterceptorDialog';
import { products } from '@/db/products';
import React from 'react'

const ProductCardInterceptor = async ({params}:{params:{productId:string}}) => {

        const {productId} = await params;

        const product = products.find(prod => prod.id === +productId);

        return (
                <ProductInterceptorDialog {...product} />
        )
}

export default ProductCardInterceptor