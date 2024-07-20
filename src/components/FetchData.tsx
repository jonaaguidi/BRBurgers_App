'use client'
import { useEffect, useState } from 'react';
import { supabase } from '../lib/supabaseClient';
import { Products } from '../models/products.model';

const FetchData: React.FC = () => {
  const [products, setProducts] = useState<Products[]>([]);

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

  return (
    <div>
      <h1>BR Burgers</h1>
      {products.map((product) => (
        <div className='text-white py-4 px-2  w-full flex flex-col' key={product.id}>
          <p className='text-xs'>NOMBRE DEL PRODUCTO:{product.name}</p>
          <p className='text-xs'>Descripcion:{product.description}</p>
          <p className='text-xs'>Categoria:{product.categories}</p>
          <p className='text-xs'>Extras:{JSON.stringify(product.extras)}</p>
          <img src={product.image} width={400}></img>
        </div>
      ))}
    </div>
  );
};

export default FetchData;