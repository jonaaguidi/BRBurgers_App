// /hooks/useAuth.ts
import { useEffect, useState } from 'react'
import { useRouter } from 'next/navigation'
import { supabase } from '../lib/supabaseClient'
import type { User } from '@supabase/supabase-js'

type AuthUser = User | null

const useAuth = (): { user: AuthUser, isLoading: boolean } => {
  const [user, setUser] = useState<AuthUser>(null)
  const [isLoading, setIsLoading] = useState(true)
  const router = useRouter()

  useEffect(() => {
    const checkUser = async () => {
      const { data: { session } } = await supabase.auth.getSession()
      if (!session) {
        router.push('/loginAdmin')
      } else {
        setUser(session.user)
      }
      setIsLoading(false)
    }

    checkUser()
  }, [router])

  return { user, isLoading }
}

export default useAuth
