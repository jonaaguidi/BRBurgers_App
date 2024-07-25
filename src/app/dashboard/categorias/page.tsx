'use client'
import React, { useEffect } from 'react'
import useAuth from '../../../hooks/useAuth'
import { useRouter } from 'next/navigation'
import Sidebar from '@/components/Sidebar'
import FetchCategories from '@/components/FetchCategories'
const Categorias = () => {
  const { user, isLoading } = useAuth()
  const router = useRouter()

  useEffect(() => {
    if (!isLoading && !user) {
      router.push('/loginAdmin')
    }
  }, [isLoading, user, router])

  if (isLoading) {
    return <div>Cargando...</div>
  }

  if (!user) {
    return null
  }
  
  return (
    <>
    <section className="w-full h-fit">
      <Sidebar />
      <div className='flex flex-wrap flex-col ml-60 gap-10'>
        <div className="w-full flex justify-start items-start mx-auto py-12 border-b-[1px] border-[#a1a1a9] border-opacity-30 px-10">
          <h1 className="text-2xl font-bold">Bienvenido al Dashboard, {user.email}</h1>
        </div>
        <FetchCategories />
      </div>
    </section>
    </>
  )
}

export default Categorias