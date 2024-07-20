import React from 'react'
import { useRouter } from 'next/navigation'
import { supabase } from '../lib/supabaseClient'

const LogoutButton: React.FC = () => {
  const router = useRouter()

  const handleLogout = async () => {
    const { error } = await supabase.auth.signOut()
    if (error) {
      console.error('Error cerrando sesión:', error)
      return
    }

    // Redirigir al usuario a la página de inicio de sesión
    router.push('/loginAdmin')
  }

  return (
    <button 
      onClick={handleLogout}
      className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
    >
      Cerrar Sesión
    </button>
  )
}

export default LogoutButton
