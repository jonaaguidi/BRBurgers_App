'use client'
import React, { useEffect } from 'react'
import useAuth from '../../../hooks/useAuth'
import { useRouter } from 'next/navigation'
import Sidebar from '@/components/Sidebar'

const Usuarios = () => {
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
      <Sidebar />
      <div className='ml-60'>Usuarios</div>
    </>
  )
}

export default Usuarios