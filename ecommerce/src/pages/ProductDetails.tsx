// ProductDetails.tsx
import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';

type Product = {
  id: string;
  name: string;
  price: number;
  photo: string;
  stock: number;
  animalType: string;
};

type ProductDetailsProps = {
  setCartItems: React.Dispatch<React.SetStateAction<Product[]>>;
};

const ProductDetails: React.FC<ProductDetailsProps> = ({ setCartItems }) => {
  const { id } = useParams<{ id: string }>();
  const [quantity, setQuantity] = useState(1);
  const navigate = useNavigate();

  // Mock product data for demonstration
  const products: Product[] = [
    { id: "1", name: "Pet Life Antiseptic Freshener Spray for Puppy", photo: "https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcTNRPGtnyJQXhw8aiBk36iuIslzorUddWGI-TM0n7qx4exUI9D8FJtQvQgaBpWbyB5_cme9A5wkW6sjhjoZHqbgt98RR24-W-fWFAcFy1_vjS_GxIzh7Xgx&usqp=CAE", price: 230, stock: 100, animalType: "dog" },
    { id: "2", name: "Bunny Rabbit House", photo: "https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcTgokq1lVsnZNJ26Q7B3TBwIKq3z7Qz7gtPWCHOdqyJHXeIAmH30AQ56ZjX06ZCauaUX_DutGYN1XZsDfOk17En2zJ0nwisPVGBB1WR9_Hi1RHuhVxklrNh&usqp=CAE", price: 850, stock: 50, animalType: "rabbit" },
    { id: "3", name: "Cat Whiskas", photo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSbOo-AtkU_uSBgrbzwGekQkEEG_iUzeN9yJsogmJw159XISudJWpf8eRQoeCDDMV1x4-0&usqp=CAU", price: 120, stock: 200, animalType: "cat" },
    { id: "4", name: "Dog Collar", photo: "https://example.com/dog-collar.jpg", price: 50, stock: 150, animalType: "dog" },
    { id: "5", name: "Bird Cage", photo: "https://example.com/bird-cage.jpg", price: 300, stock: 75, animalType: "bird" },
    { id: "6", name: "Fish Tank", photo: "https://example.com/fish-tank.jpg", price: 500, stock: 20, animalType: "fish" },
    { id: "7", name: "Hamster Wheel", photo: "https://example.com/hamster-wheel.jpg", price: 100, stock: 60, animalType: "hamster" },
    { id: "8", name: "Lizard Lamp", photo: "https://example.com/lizard-lamp.jpg", price: 80, stock: 40, animalType: "lizard" },
    { id: "9", name: "Parrot Food", photo: "https://example.com/parrot-food.jpg", price: 20, stock: 200, animalType: "parrot" },
    { id: "10", name: "Guinea Pig Hay", photo: "https://example.com/guinea-pig-hay.jpg", price: 30, stock: 120, animalType: "guinea pig" }
  ];

  const product = products.find(p => p.id === id);

  if (!product) {
    return <div>Product not found</div>;
  }

  const addToCart = () => {
    setCartItems((prevCartItems) => [...prevCartItems, { ...product, quantity }]);
  };

  const buyNow = () => {
    addToCart();
    navigate('/checkout');
  };

  return (
    <div className="product-details">
      <h2>{product.name}</h2>
      <img src={product.photo} alt={product.name} />
      <p>Price: Rs. {product.price}</p>
      <p>Stock: {product.stock}</p>
      <div className="quantity-selector">
        <label htmlFor="quantity">Quantity:</label>
        <input
          type="number"
          id="quantity"
          value={quantity}
          min="1"
          max={product.stock}
          onChange={(e) => setQuantity(Number(e.target.value))}
        />
      </div>
      <button onClick={addToCart}>Add to Cart</button>
      <button onClick={buyNow}>Buy Now</button>
    </div>
  );
};

export default ProductDetails;
