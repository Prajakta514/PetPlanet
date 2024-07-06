import React from 'react';
import { Link } from 'react-router-dom';

type Product = {
  id: string;
  name: string;
  price: number;
  photo: string;
  stock: number;
  animalType: string;
};

interface CartProps {
  cartItems: { product: Product, quantity: number }[];
  setCartItems: React.Dispatch<React.SetStateAction<{ product: Product, quantity: number }[]>>;
}

const Cart: React.FC<CartProps> = ({ cartItems, setCartItems }) => {
  const totalPrice = cartItems.reduce((total, item) => total + item.product.price * item.quantity, 0);

  const handleRemove = (id: string) => {
    setCartItems(cartItems.filter(item => item.product.id !== id));
  };

  return (
    <div className="cart">
      <h2>Shopping Cart</h2>
      <div className="cart-items">
        {cartItems.map(item => (
          <div key={item.product.id} className="cart-item">
            <img src={item.product.photo} alt={item.product.name} />
            <div>
              <h3>{item.product.name}</h3>
              <p>Price: Rs. {item.product.price}</p>
              <p>Quantity: {item.quantity}</p>
              <p>Total: Rs. {item.product.price * item.quantity}</p>
              <button onClick={() => handleRemove(item.product.id)}>Remove</button>
            </div>
          </div>
        ))}
      </div>
      <div className="cart-total">
        <h3>Total Price: Rs. {totalPrice}</h3>
        <Link to="/checkout" className="checkout-button">Proceed to Checkout</Link>
      </div>
    </div>
  );
};

export default Cart;
