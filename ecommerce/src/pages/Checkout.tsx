import React from 'react';
import { useNavigate } from 'react-router-dom';

type Product = {
  id: string;
  name: string;
  price: number;
  photo: string;
  stock: number;
  animalType: string;
};

interface CheckoutProps {
  cartItems: { product: Product, quantity: number }[];
  setCartItems: React.Dispatch<React.SetStateAction<{ product: Product, quantity: number }[]>>;
}

const Checkout: React.FC<CheckoutProps> = ({ cartItems, setCartItems }) => {
  const navigate = useNavigate();
  const totalPrice = cartItems.reduce((total, item) => total + item.product.price * item.quantity, 0);

  const handlePlaceOrder = (event: React.FormEvent) => {
    event.preventDefault();
    setCartItems([]);
    navigate('/order-confirmation');
  };

  return (
    <div className="checkout">
      <h2>Checkout</h2>
      <div className="checkout-items">
        {cartItems.map(item => (
          <div key={item.product.id} className="checkout-item">
            <img src={item.product.photo} alt={item.product.name} />
            <div>
              <h3>{item.product.name}</h3>
              <p>Price: Rs. {item.product.price}</p>
              <p>Quantity: {item.quantity}</p>
              <p>Total: Rs. {item.product.price * item.quantity}</p>
            </div>
          </div>
        ))}
      </div>
      <form onSubmit={handlePlaceOrder}>
        <div className="shipping-details">
          <h3>Shipping Details</h3>
          <label>
            Name:
            <input type="text" required />
          </label>
          <label>
            Address:
            <input type="text" required />
          </label>
          <label>
            City:
            <input type="text" required />
          </label>
          <label>
            Postal Code:
            <input type="text" required />
          </label>
          <label>
            Country:
            <input type="text" required />
          </label>
        </div>
        <div className="payment-method">
          <h3>Payment Method</h3>
          <label>
            <input type="radio" name="payment" value="credit-card" required /> Credit Card
          </label>
          <label>
            <input type="radio" name="payment" value="paypal" required /> PayPal
          </label>
          <label>
            <input type="radio" name="payment" value="cash-on-delivery" required /> Cash on Delivery
          </label>
        </div>
        <div className="order-summary">
          <h3>Order Summary</h3>
          <p>Total Price: Rs. {totalPrice}</p>
        </div>
        <button type="submit">Place Order</button>
      </form>
    </div>
  );
};

export default Checkout;
