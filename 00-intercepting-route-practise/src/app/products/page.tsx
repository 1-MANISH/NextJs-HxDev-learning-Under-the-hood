import ProductCard from '@/components/shared/ProductCard'
import { products } from '@/db/products'
import React from 'react'

const Products = () => {

  
        return (
                <div className='flex flex-col gap-4 min-h-screen p-4'>
                        <h1 className='my-4 text-2xl font-bold '>Products</h1>

                        <div className="flex flex-wrap gap-4 min-h-screen  mx-auto border-gray-100">
                                {
                                        products.map(product => (
                                                <ProductCard key={product.id} {...product} />
                                        ))
                                }
                        </div>
                </div>
        )
}

export default Products