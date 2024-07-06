// ProductList.tsx
import React from 'react';
import { Link } from 'react-router-dom';

const ProductList: React.FC = () => {
  const products = [
    { id: "1", name: "Pet Life Antiseptic Freshener Spray for Puppy", photo: "https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcTNRPGtnyJQXhw8aiBk36iuIslzorUddWGI-TM0n7qx4exUI9D8FJtQvQgaBpWbyB5_cme9A5wkW6sjhjoZHqbgt98RR24-W-fWFAcFy1_vjS_GxIzh7Xgx&usqp=CAE", price: 230, stock: 100 },
    { id: "2", name: "Bunny Rabbit House", photo: "https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcTgokq1lVsnZNJ26Q7B3TBwIKq3z7Qz7gtPWCHOdqyJHXeIAmH30AQ56ZjX06ZCauaUX_DutGYN1XZsDfOk17En2zJ0nwisPVGBB1WR9_Hi1RHuhVxklrNh&usqp=CAE", price: 850, stock: 50 },
    { id: "3", name: "Cat Whiskas", photo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSbOo-AtkU_uSBgrbzwGekQkEEG_iUzeN9yJsogmJw159XISudJWpf8eRQoeCDDMV1x4-0&usqp=CAU", price: 120, stock: 200 },
    // Add more products as needed
  ];

  return (
    <div className="product-list">
      <h2>Products</h2>
      <div className="products">
        {products.map(product => (
          <div key={product.id} className="product-card">
            <Link to={`/products/${product.id}`}>
              <img src={product.photo} alt={product.name} />
              <h3>{product.name}</h3>
              <p>Rs. {product.price}</p>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductList;
