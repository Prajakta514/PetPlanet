import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import ProductCard from '../components/ProductCard';

type Product = {
  id: string;
  name: string;
  price: number;
  photo: string;
  stock: number;
  animalType: string;
};

interface ProductsProps {
  products: Product[];
  setCartItems: React.Dispatch<React.SetStateAction<{ product: Product, quantity: number }[]>>;
}

const Products: React.FC<ProductsProps> = ({ products, setCartItems }) => {
  const [filter, setFilter] = useState('');
  const [maxPrice, setMaxPrice] = useState(Infinity);
  const [minPrice, setMinPrice] = useState(0);

  const filteredProducts = products.filter(product => 
    (filter ? product.animalType.includes(filter) : true) &&
    product.price >= minPrice &&
    product.price <= maxPrice
  );

  const addToCart = (product: Product, quantity: number = 1) => {
    setCartItems((prevCartItems) => [...prevCartItems, { product, quantity }]);
  };

  return (
    <div className="products-container">
      <h2>Products</h2>
      <div className="filters">
        <label>
          Animal Type:
          <select value={filter} onChange={e => setFilter(e.target.value)}>
            <option value="">All</option>
            <option value="dog">Dog</option>
            <option value="cat">Cat</option>
            <option value="rabbit">Rabbit</option>
            <option value="bird">Bird</option>
            <option value="fish">Fish</option>
            <option value="hamster">Hamster</option>
            <option value="lizard">Lizard</option>
            <option value="parrot">Parrot</option>
            <option value="guinea pig">Guinea Pig</option>
          </select>
        </label>
        <label>
          Min Price:
          <input type="number" value={minPrice} onChange={e => setMinPrice(Number(e.target.value))} />
        </label>
        <label>
          Max Price:
          <input type="number" value={maxPrice} onChange={e => setMaxPrice(Number(e.target.value))} />
        </label>
      </div>
      <div className="products-grid">
        {filteredProducts.map(product => (
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
    </div>
  );
};

export default Products;
