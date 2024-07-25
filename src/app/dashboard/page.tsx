'use client'
import React, { useEffect } from 'react'
import useAuth from '../../hooks/useAuth'
import { useRouter } from 'next/navigation'
import { Products } from '@/models/products.model'
import { supabase } from '@/lib/supabaseClient'
import { useState } from 'react'
import Sidebar from '@/components/Sidebar'

const Dashboard: React.FC = () => {
  const [products, setProducts] = useState<Products[]>([]);
  const { user, isLoading } = useAuth()
  const router = useRouter()

  useEffect(() => {
    const fetchBurgers = async () => {
      const { data, error } = await supabase
        .from('products')
        .select('*');
      console.log(data)

      if (error) {
        console.error('Error fetching Products:', error);
      } else {
        setProducts(data);
      }
    };

    fetchBurgers();
  }, []);

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
    <section className="w-full h-fit">
      <Sidebar />
      <div className='flex flex-wrap ml-60'>
        <div className="w-full flex justify-start items-start mx-auto py-12 border-b-[1px] border-[#a1a1a9] border-opacity-30 px-10">
          <h1 className="text-2xl font-bold">Bienvenido al Dashboard, {user.email}</h1>
        </div>
        {products.map((product) => (
          <div className='w-[380px] text-white py-6 px-4 flex flex-col' key={product.id}>
            <p className='text-xs'>NOMBRE DEL PRODUCTO:{product.name}</p>
            <p className='text-xs'>Descripcion:{product.description}</p>
            <p className='text-xs'>Categoria:{product.categories}</p>
            <p className='text-xs'>Extras:{JSON.stringify(product.extras)}</p>
            <img src={product.image} width={400}></img>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Dashboard
