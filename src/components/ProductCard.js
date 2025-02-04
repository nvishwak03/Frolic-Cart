import React from 'react';
import { Link } from 'react-router-dom';

const ProductCard = ({ product }) => {
  return (
    <div className="product-card">
      <img src={product.image_url} alt={product.name} />
      <h2>{product.name}</h2>
      <p>{product.description}</p>
      <p>${product.price}</p>
      <Link to={`/product/${product.id}`}>View Details</Link>
    </div>
  );
};

export default ProductCard;
