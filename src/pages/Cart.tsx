import React from 'react';
import { useCart } from '../context/CartContext';
import '../styles/Cart.css';

const Cart: React.FC = () => {
  const { cart, removeFromCart, updateQuantity, totalItems, totalPrice } = useCart();

  return (
    <div className="cart-page">
      <div className="cart-container">
        <h2>Carrinho de Compras</h2>
        {cart.length === 0 ? (
          <p className="empty-cart">Seu carrinho está vazio</p>
        ) : (
          <div className="cart-content">
            <ul className="cart-items">
              {cart.map((item) => (
                <li key={item.id} className="cart-item">
                  <img src={item.thumbnail} alt={item.title} className="cart-item-image" />
                  <div className="cart-item-details">
                    <strong>{item.title}</strong>
                    <p>Preço: R$ {item.price.toFixed(2)}</p>
                    <div className="cart-item-controls">
                      <label>
                        Quantidade:
                        <input
                          type="number"
                          value={item.quantity}
                          min="1"
                          onChange={(e) =>
                            updateQuantity(item.id, parseInt(e.target.value, 10))
                          }
                        />
                      </label>
                      <button
                        className="remove-button"
                        onClick={() => removeFromCart(item.id)}
                      >
                        Remover
                      </button>
                    </div>
                  </div>
                  <p className="cart-item-total">
                    Total: R$ {(item.price * item.quantity).toFixed(2)}
                  </p>
                </li>
              ))}
            </ul>
            <div className="cart-summary">
              <p>Total de Itens: {totalItems}</p>
              <p>Preço Total: R$ {totalPrice.toFixed(2)}</p>
              <button className="checkout-button">Finalizar Compra</button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Cart;
