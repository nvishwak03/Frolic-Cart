// src/pages/Home.js
import React, { useState, useEffect } from 'react';
import ProductCard from '../components/ProductCard';
import supabase from '../utils/supabaseClient';
const Home = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const { data, error } = await supabase
          .from('products')
          .select('*');
        if (error) throw error;
        setProducts(data);
      } catch (err) {
        console.error('Error fetching products:', err);
      }
    };

    fetchProducts();
  }, []);

  return (
    <div>
      <h1>Welcome to FrolicCart</h1>
      <p>Shop the best products for you!</p>
      
      <div className="product-list">
        {products.length > 0 ? (
          products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))
        ) : (
          <p>Loading products...</p>
        )}
      </div>
    </div>
  );
};

export default Home;
