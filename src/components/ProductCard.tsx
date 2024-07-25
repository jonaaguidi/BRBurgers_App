import React from 'react'
import Premium from './Badges/Premium'

interface ProductCard {
    productName: string;
    productDescription: string;
    productPrice?: string | number;
}

const ProductCard = ({productName, productDescription, productPrice }:ProductCard) => {
  return (
    <div className='w-[400px] h-fit bg-[#353535] px-6 py-4 rounded-2xl border-2 border-[#a1a1a9] border-opacity-30'>
        <Premium />
        <div className='w-full flex flex-col gap-2 pt-2'>
            <p>{productName}</p>
            <p className='text-xs max-w-[75%] text-[#a1a1a9] text-opacity-85'>{productDescription}</p>
            <div className='flex items-center justify-between'>
                <p className='font-medium'>${productPrice}</p>
                <button className='rounded-lg px-2 py-2 bg-[#F7AF38] text-sm'>+ Agregar</button>
            </div>
        </div>
    </div>
  )
}

export default ProductCard