import React from 'react';

type ProductCardProps = {
  id: string;
  name: string;
  price: number;
  photo: string;
  stock: number;
  animalType: string;
  handler: () => void;
};

const ProductCard: React.FC<ProductCardProps> = ({ id, name, price, photo, stock, animalType, handler }) => {
  return (
    <div className="product-card">
      <img src={photo} alt={name} />
      <h3>{name}</h3>
      <p>Price: Rs. {price}</p>
      <p>Stock: {stock}</p>
      <button onClick={handler}>Add to Cart</button>
    </div>
  );
};

export default ProductCard;
