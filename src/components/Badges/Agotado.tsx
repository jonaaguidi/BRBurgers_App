import React from 'react'
import { AiOutlineExclamationCircle } from "react-icons/ai";


const Agotado = () => {
    return (
        <button className='flex gap-0.5 justify-center items-center p-1.5 px-2 bg-[#CC2727] text-white rounded-3xl text-xs'>
            <AiOutlineExclamationCircle className='text-[white] text-lg' />
            Agotado
        </button>
    )
}

export default Agotado