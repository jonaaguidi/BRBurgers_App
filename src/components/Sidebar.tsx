import React from 'react'
import LogoutButton from './Logout'
import logo from '../../public/Logotipo.svg'
import Image from 'next/image'
import { FaHome } from "react-icons/fa";
import { FaHamburger } from "react-icons/fa";
import { TbCategoryFilled } from "react-icons/tb";
import { FaUserCircle } from "react-icons/fa";
import Link from 'next/link';

const Sidebar = () => {
    return (
        <section className='fixed w-fit h-[100vh] py-10 pr-8 flex flex-col justify-between items-center gap-6 bg-[#131313]'>
            <nav className='flex flex-col gap-4 px-6'>
                <Image alt="" src={logo} width={160} className='pb-4' />
                <Link href={'/dashboard'}>
                    <div className='px-4 py-3 flex gap-3 items-center  text-white font-medium bg-[#131313] hover:bg-white hover:text-black transition transition-800 cursor-pointer rounded-lg'>
                        <FaHome className='hover:black text-xl' />
                        Inicio
                    </div>
                </Link>
                <Link href={'/dashboard/productos'}>
                    <div className='px-4 py-3 flex gap-3 items-center  text-white font-medium bg-[#131313] hover:bg-white hover:text-black transition transition-800 cursor-pointer rounded-lg'>
                        <FaHamburger className='hover:black text-lg' />
                        Productos
                    </div>
                </Link>
                <Link href={'/dashboard/categorias'}>
                    <div className='px-4 py-3 flex gap-3 items-center text-white font-medium bg-[#131313] hover:bg-white hover:text-black transition transition-800 cursor-pointer rounded-lg'>
                        <TbCategoryFilled className='hover:black text-lg' />
                        Categorias
                    </div>
                </Link>
                <Link href={'/dashboard/usuarios'}>
                    <div className='px-4 py-3 flex gap-3 items-center text-white font-medium bg-[#131313] hover:bg-white hover:text-black transition transition-800 cursor-pointer rounded-lg'>
                        <FaUserCircle className='hover:black text-lg' />
                        Usuarios
                    </div>
                </Link>
            </nav>
            <LogoutButton />
        </section>
    )
}

export default Sidebar