import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Home from './pages/Home';
import Products from './pages/Products';
import ProductDetails from './pages/ProductDetails';
import Cart from './pages/Cart';
import Checkout from './pages/Checkout';
import OrderConfirmation from './pages/OrderConfirmation'; // Importing icons
import { FaShoppingCart, FaHome, FaTags } from 'react-icons/fa';
type Product = {
  id: string;
  name: string;
  price: number;
  photo: string;
  stock: number;
  animalType: string;
};

const App: React.FC = () => {
  const [cartItems, setCartItems] = useState<{ product: Product, quantity: number }[]>([]);

  const products: Product[] = [
    { id: "1", name: "Pet Life Antiseptic Freshener Spray for Puppy", photo: "https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcTNRPGtnyJQXhw8aiBk36iuIslzorUddWGI-TM0n7qx4exUI9D8FJtQvQgaBpWbyB5_cme9A5wkW6sjhjoZHqbgt98RR24-W-fWFAcFy1_vjS_GxIzh7Xgx&usqp=CAE", price: 230, stock: 100, animalType: "dog" },
    { id: "2", name: "Bunny Rabbit House", photo: "https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcTgokq1lVsnZNJ26Q7B3TBwIKq3z7Qz7gtPWCHOdqyJHXeIAmH30AQ56ZjX06ZCauaUX_DutGYN1XZsDfOk17En2zJ0nwisPVGBB1WR9_Hi1RHuhVxklrNh&usqp=CAE", price: 850, stock: 50, animalType: "rabbit" },
    { id: "3", name: "Cat Whiskas", photo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSbOo-AtkU_uSBgrbzwGekQkEEG_iUzeN9yJsogmJw159XISudJWpf8eRQoeCDDMV1x4-0&usqp=CAU", price: 120, stock: 200, animalType: "cat" },
    { id: "4", name: "Dog Collar", photo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQXPgBG_wbEhuLro0abArApcPmEF8yZ9aTZcg&s", price: 50, stock: 150, animalType: "dog" },
    { id: "5", name: "Bird Cage", photo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSjb9o-JaSotd41bXwVPxN-oVovXLJvNR5c_g&s", price: 300, stock: 75, animalType: "bird" },
    { id: "6", name: "Fish Tank", photo: "https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcTRbQcWU3n2P40w_lBD46zdAFPyv4iudgHIw5Hv5DBLUY2dIBAY6SR1-YA2LgborpNyuVqchI3_gQuQ_o06oSDzcGW7jqxW5fgFtvyU5BA&usqp=CAE", price: 500, stock: 20, animalType: "fish" },
    { id: "7", name: "Hamster Wheel", photo: "https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcRWMR3MT-WiNNdRK6ORMkc9LPFifOute20dLjh7pM0y26cXwNgBMBZ7EQzlN4JIPhiRfKGU8QXwLL9R7BvR5-bbzXN_LPc4NQIu5u4eCjgK&usqp=CAE", price: 100, stock: 60, animalType: "hamster" },
    { id: "8", name: "Lizard Lamp", photo: "https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcS0fSdukN0Zno8sDKEQzXacfp5bfH9ZRkkHpezuNmlOZh1kmO2nmXKWBIRLsHFHr1XfeBoMIO533BARtdu22e7fLEMM0dt5lI61gcrZF1biHO8leXXN05PUwA&usqp=CAE", price: 80, stock: 40, animalType: "lizard" },
    { id: "9", name: "Parrot Food", photo: "https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcSDb0C87YerCWGSeIJX8q5j3LI5b2pjTi8U-d8fYoFCwaAbHaBVU9D_4pl8go-tKVdkolh6fIxncntC1WALlu7WeLj70lpbLbXR-FSBbrupjgBH_SvkqdmGdw&usqp=CAE", price: 20, stock: 200, animalType: "parrot" },
    { id: "10", name: "Guinea Pig Hay", photo: "https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcRRWAXL5z7hLHhh0B1Zp6yM4Kb5EE72OQ1f-nFNrMT1w2Lgm85-OydfpaF1Gc_yFB2AKc1gIlAXDzi1aswQDJJ5nnBG9A_wdg&usqp=CAE", price: 30, stock: 120, animalType: "guinea pig" }
  ];

  return (
    <Router>
       <div className="navbar">
        <div className="navbar-brand">
          <Link to="/" className="nav-logo">PetPlanet</Link>
        </div>
        <div className="nav-links">
          <Link to="/" className="nav-item"><FaHome size={20} /></Link>
          <Link to="/products" className="nav-item"><FaTags size={20} /></Link>
          <Link to="/cart" className="nav-item"><FaShoppingCart size={20} /> {cartItems.length}</Link>
        </div>
      </div>
        <Routes>
          <Route path="/" element={<Home setCartItems={setCartItems} />} />
          <Route path="/products" element={<Products products={products} setCartItems={setCartItems} />} />
          <Route path="/product/:id" element={<ProductDetails products={products} setCartItems={setCartItems} />} />
          <Route path="/cart" element={<Cart cartItems={cartItems} setCartItems={setCartItems} />} />
          <Route path="/checkout" element={<Checkout cartItems={cartItems} setCartItems={setCartItems} />} />
          <Route path="/order-confirmation" element={<OrderConfirmation />} />
            
        </Routes>
      
    </Router>
  );
};

export default App;
