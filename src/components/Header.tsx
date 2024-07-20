import React from 'react'
import Image from 'next/image'
import logo from '../../public/Logotipo.svg'
import { FaCartShopping } from "react-icons/fa6";
import { FaWhatsapp } from "react-icons/fa";
import Link from 'next/link';


const Header = () => {
  return (
    <header className='flex justify-between items-center px-[10rem] py-5 bg-[#131313]'>
        <Image alt="" src={logo} width={160} />
        <div className='flex gap-[4rem]'>
          <Link target='_blank' href="https://api.whatsapp.com/send?phone=5491138913836&text=Hola%20bienvenido%21">
            <FaWhatsapp className='text-3xl text-[#43CD66]' />
          </Link> 
          <FaCartShopping className='text-3xl'/>
        </div>
    </header>
  )
}

export default Header