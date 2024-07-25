import React from 'react'
import Premium from './Badges/Premium'
import { FaRegEdit } from "react-icons/fa";
import { IoMdTrash } from "react-icons/io";
import Oferta from './Badges/Oferta';
import Agotado from './Badges/Agotado';

interface ProductCard {
  productName: string;
  productDescription: string;
  productPrice: string | number;
  productBadge?: string;
}

const ProductCardAdmin = ({ productName, productDescription, productPrice, productBadge}: ProductCard) => {
  
  const renderBadge = () => {
    switch (productBadge) {
      case 'AGOTADO':
        return <Agotado />;
      case 'PROMOCION':
        return <Oferta />;
      case 'PREMIUM':
        return <Premium />;
      default:
        return null;
    }
  };

  return (
    <div className='w-[400px] h-fit bg-[#353535] px-6 py-4 rounded-2xl border-2 border-[#a1a1a9] border-opacity-30'>
      {renderBadge()}
      <div className='w-full flex flex-col gap-2 pt-2'>
        <p>{productName}</p>
        <p className='text-xs max-w-[75%] text-[#a1a1a9] text-opacity-85'>{productDescription}</p>
        <div className='flex items-center justify-between'>
          <p className='font-medium'>${productPrice}</p>
          <div className='flex gap-1.5'>
            <button onClick={() => { alert("alerta!") }} className='flex gap-1 rounded-lg px-4 py-2 bg-[#000000] text-white text-sm font-medium hover:bg-[#131313] transition transion-800'>
              <FaRegEdit className='text-lg' />
              Editar
            </button>
            <button onClick={() => { alert("alerta!") }} className='flex gap-0.5 rounded-lg px-2 py-2 bg-[#CC2727] text-white text-sm font-medium hover:bg-[#9b2929] transition transion-800'>
              <IoMdTrash className='text-lg' />
              Eliminar
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProductCardAdmin