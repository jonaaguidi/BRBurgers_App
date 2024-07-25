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
      className="bg-red-500 max-w-[140px] hover:bg-red-700 text-white font-medium py-2 px-4 rounded-lg"
    >
      Cerrar Sesión
    </button>
  )
}

export default LogoutButton
