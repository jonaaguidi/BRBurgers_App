'use client'
import React, { useEffect, useState } from 'react'
import useAuth from '../../../hooks/useAuth'
import { useRouter } from 'next/navigation'
import { Products } from '@/models/products.model'
import { supabase } from '@/lib/supabaseClient'
import Sidebar from '@/components/Sidebar'
import ProductCardAdmin from '@/components/ProductCardAdmin'

const Productos = () => {
  const { user, isLoading } = useAuth()
  const router = useRouter()
  const [products, setProducts] = useState<Products[]>([]);

  useEffect(() => {
    const fetchBurgers = async () => {
      const { data, error } = await supabase
        .from('products')
        .select('*');

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
      <div className='flex flex-wrap flex-col ml-60 gap-10'>
        <div className="w-full fixed flex justify-start items-start mx-auto py-12 border-b-[1px] bg-black opacity-90 border-[#a1a1a9] border-opacity-30 px-10">
          <h1 className="text-2xl font-bold">Bienvenido al Dashboard, {user.email}</h1>
        </div>
        <div className='flex flex-wrap px-10 pt-40 gap-8 items-end justify-start'>
          {products.map((product) => (
            <ProductCardAdmin
              key={product.id}
              productName={product.name}
              productDescription={product.description}
              productPrice={product.price}
              productBadge={product.badge}
            />
          ))}
        </div>
      </div>
    </section>
  )
}

export default Productos
