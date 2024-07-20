'use client'
import React, { useEffect } from 'react'
import useAuth from '../../hooks/useAuth'
import { useRouter } from 'next/navigation'
import LogoutButton from '@/components/Logout'

const Dashboard: React.FC = () => {
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
    <section className="h-screen">
      <div className="container mx-auto py-10">
        <h1 className="text-2xl font-bold">Bienvenido al Dashboard, {user.email}</h1>
        <LogoutButton />
      </div>
    </section>
  )
}

export default Dashboard
