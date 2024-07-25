import React from 'react'
import { AiOutlineExclamationCircle } from "react-icons/ai";


const Oferta = () => {
    return (
        <button className='flex gap-0.5 justify-center items-center p-1.5 px-2 bg-[#43CD66] text-white rounded-3xl text-xs'>
            <AiOutlineExclamationCircle className='text-[white] text-lg' />
            Promocion
        </button>
    )
}

export default Oferta