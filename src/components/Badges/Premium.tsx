import React from 'react'
import { MdOutlineWorkspacePremium } from "react-icons/md";


const Premium = () => {
  return (
    <button className='flex gap-0.5 justify-center items-center p-1.5 px-2 bg-[#191919] text-white border border-[#FFB800] border-opacity-60 rounded-3xl text-xs'>
        <MdOutlineWorkspacePremium className='text-[#FFB800] text-lg' />
        Premium
    </button>
  )
}

export default Premium