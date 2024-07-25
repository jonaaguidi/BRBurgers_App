'use client'
import { useEffect, useState } from 'react';
import { supabase } from '../lib/supabaseClient';
import { Products } from '../models/products.model';
import ProductCard from './ProductCard';

const FetchCategories: React.FC = () => {
  const [products, setProducts] = useState<Products[]>([]);

  useEffect(() => {
    const fetchBurgers = async () => {
      const { data, error } = await supabase
        .from('categories')
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
    <div className='flex flex-wrap px-10 gap-8 items-end justify-start'>
    {products.map((product) => (
      <ProductCard key={product.id} productName={product.name} productDescription={product.description} productPrice={product.price} />
    ))}
  </div>
  );
};

export default FetchCategories;