import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import ProductCard from '../components/ProductCard';

type Product = {
  id: string;
  name: string;
  price: number;
  photo: string;
  stock: number;
  animalType: string;
};

interface HomeProps {
  setCartItems: React.Dispatch<React.SetStateAction<{ product: Product, quantity: number }[]>>;
}

const Home: React.FC<HomeProps> = ({ setCartItems }) => {
  const navigate = useNavigate();

  const addToCart = (product: Product, quantity: number = 1) => {
    setCartItems((prevCartItems) => [...prevCartItems, { product, quantity }]);
    navigate('/cart');
  };

  const latestProducts: Product[] = [
    { id: "1", name: "Pet Life Antiseptic Freshener Spray for Puppy", photo: "https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcTNRPGtnyJQXhw8aiBk36iuIslzorUddWGI-TM0n7qx4exUI9D8FJtQvQgaBpWbyB5_cme9A5wkW6sjhjoZHqbgt98RR24-W-fWFAcFy1_vjS_GxIzh7Xgx&usqp=CAE", price: 230, stock: 100, animalType: "dog" },
    { id: "2", name: "Bunny Rabbit House", photo: "https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcTgokq1lVsnZNJ26Q7B3TBwIKq3z7Qz7gtPWCHOdqyJHXeIAmH30AQ56ZjX06ZCauaUX_DutGYN1XZsDfOk17En2zJ0nwisPVGBB1WR9_Hi1RHuhVxklrNh&usqp=CAE", price: 850, stock: 50, animalType: "rabbit" },
    { id: "3", name: "Cat Whiskas", photo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSbOo-AtkU_uSBgrbzwGekQkEEG_iUzeN9yJsogmJw159XISudJWpf8eRQoeCDDMV1x4-0&usqp=CAU", price: 120, stock: 200, animalType: "cat" },
  ];

  return (
    <div className="home-container">
      <div className="bg-image">
        <div className="info-section">
          <h2>Pamper Your Pets with the Best!</h2>
          <p>Discover premium products to keep your furry friends happy and healthy.</p>
          <Link to="/about" className="more-button">Learn More</Link>
        </div>
      </div>

      <div className="latest-products">
        <h2>Latest Products</h2>
        <div className="products-grid">
          {latestProducts.map(product => (
            <ProductCard
              key={product.id}
              id={product.id}
              name={product.name}
              price={product.price}
              photo={product.photo}
              stock={product.stock}
              animalType={product.animalType}
              handler={() => addToCart(product)}
            />
          ))}
        </div>
        <Link to="/products" className="more-button">More Products</Link>
      </div>
    </div>
  );
};

export default Home;
