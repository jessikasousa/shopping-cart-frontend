import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import ProductList from './pages/ProductList';
import Cart from './pages/Cart';
import { CartProvider, useCart } from './context/CartContext';
import { Product } from './types/Product';
import './styles/App.css';

const App: React.FC = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch('http://localhost:8080/products?q=notebook');
        if (!response.ok) {
          throw new Error('Failed to fetch products');
        }
        const data = await response.json();
        setProducts(data.products);
      } catch (err) {
        setError((err as Error).message);
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  return (
    <CartProvider>
      <Router>
        <header className="header">
          <Link to="/" className="header-title">
            <h1>Shopping Cart</h1>
          </Link>
          <CartIcon />
        </header>
        <main>
          {loading && <p>Carregando produtos...</p>}
          {error && <p>Erro: {error}</p>}
          {!loading && !error && (
            <Routes>
              <Route
                path="/"
                element={<ProductList products={products} />}
              />
              <Route path="/cart" element={<Cart />} />
            </Routes>
          )}
        </main>
      </Router>
    </CartProvider>
  );
};

export default App;

const CartIcon: React.FC = () => {
  const { totalItems } = useCart();

  return (
    <div className="header-right">
      <Link to="/cart" className="cart-icon">
        <span className="cart-count">{totalItems}</span>
        🛒
      </Link>
    </div>
  );
};
