import React, { Dispatch, SetStateAction } from 'react';
import { IProduct } from './Navbar'; // Ensure the path is correct

interface ProductProps {
  id: number;
  img: string;
  name: string;
  price: number;
  setCart: Dispatch<SetStateAction<IProduct[]>>; // Correctly define setCart
}

const Product: React.FC<ProductProps> = ({ id, img, name, price, setCart }) => {
  const addToCart = () => {
    setCart(prevCart => [...prevCart, { id, img, name, price, quantity: 1 }]);
  };

  return (
    <div className="border p-4">
      <img src={img} alt={name} className="w-full h-auto" />
      <h3 className="text-lg font-semibold">{name}</h3>
      <p className="text-gray-600">₹{price.toFixed(2)}</p>
      <button onClick={addToCart} className="bg-accent text-white py-2 px-4 rounded">
        Add to Cart
      </button>
    </div>
  );
};

export default Product;
