import React from 'react';
import { Product } from '../types/Product';
import { useCart } from '../context/CartContext';
import '../styles/ProductCard.css';

interface ProductCardProps {
  product: Product;
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  const { addToCart } = useCart();

  return (
    <div className="product-card">
      <img src={product.thumbnail} alt={product.title} />
      <h3>{product.title}</h3>
      <p>R$ {product.price.toFixed(2)}</p>
      <button onClick={() => addToCart(product)}>Adicionar ao carrinho</button>
    </div>
  );
};

export default ProductCard;
