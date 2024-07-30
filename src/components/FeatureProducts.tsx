import React, { Dispatch, SetStateAction } from 'react';
import Product from './Product'; // Ensure the path is correct
import { IProduct } from './Navbar'; // Ensure the path is correct

interface FeatureProductsProps {
  setCart: Dispatch<SetStateAction<IProduct[]>>; // Define the correct type for setCart
}

const FeatureProducts: React.FC<FeatureProductsProps> = ({ setCart }) => {
  // Define your products array
  const products = [
    { id: 1, img: "/product_1.webp", name: "Pomegranate", price: 24 },
  { id: 2, img: "/product_2.webp", name: "Bhindi", price: 20 },
  { id: 3, img: "/product_3.webp", name: "Papaya", price: 50 },
  { id: 4, img: "/product_4.webp", name: "Cauliflower", price: 40 },
  { id: 5, img: "/product_5.webp", name: "Kiwi", price: 24 },
  { id: 6, img: "/product_6.webp", name: "Broccoli", price: 65 },
  { id: 7, img: "/product_7.webp", name: "Tamato", price: 60 },
  { id: 8, img: "/product_8.webp", name: "Coconut", price: 89 },
  { id: 9, img: "/product_9.webp", name: "Capsicum", price: 104 },
  { id: 10, img: "/product_10.jpeg", name: "Orange", price: 59 },
  ];

  return (
    <section className="container py-[100px]">
      <h2 className="text-3xl font-semibold text-center">Featured Products</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 pt-[100px]">
        {products.map(pro => (
          <Product
            key={pro.id}
            id={pro.id}
            img={pro.img}
            name={pro.name}
            price={pro.price}
            setCart={setCart} // Pass the setCart function
          />
        ))}
      </div>
    </section>
  );
};

export default FeatureProducts;
