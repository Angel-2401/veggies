import React from 'react';
import { IProduct } from './Navbar'; // Ensure the path is correct
import { IoMdClose } from 'react-icons/io';

interface CartProps {
  cart: IProduct[]; // List of items in the cart
  setCartOpen: React.Dispatch<React.SetStateAction<boolean>>; // Function to close the cart
  setCart: React.Dispatch<React.SetStateAction<IProduct[]>>; // Function to update the cart
}

const Cart: React.FC<CartProps> = ({ cart, setCartOpen, setCart }) => {
  // Function to remove an item from the cart
  const removeItem = (id: number) => {
    setCart(prevCart => prevCart.filter(item => item.id !== id));
  };

  // Calculate total price of items in the cart
  const totalPrice = cart.reduce((total, item) => total + item.price * item.quantity, 0);

  return (
    <div className="fixed left-0 top-0 w-full min-h-screen bg-[#00000060] overflow-y-scroll">
      <div className="max-w-[400px] w-full min-h-full bg-white absolute right-0 top-0 p-6">
        <div
          className="text-3xl absolute right-0 top-0 m-6 cursor-pointer"
          onClick={() => setCartOpen(false)}
          aria-label="Close Cart"
        >
          <IoMdClose />
        </div>

        <h2 className="pt-6 text-lg font-medium text-gray-600 uppercase">Your Cart</h2>
        <div className="mt-6 space-y-2">
          {cart.map(item => (
            <div key={item.id} className="flex items-center space-x-4 p-2 border-b border-gray-300">
              <img src={item.img} alt={item.name} className="w-16 h-16 object-cover" />
              <div className="flex-1">
                <h3 className="text-lg font-medium">{item.name}</h3>
                <p className="text-sm text-gray-600">Price: ₹{item.price.toFixed(2)}</p>
                <p className="text-sm text-gray-600">Quantity: {item.quantity}</p>
              </div>
              <button onClick={() => removeItem(item.id)} className="text-red-600">
                Remove
              </button>
            </div>
          ))}
        </div>
        <div className="mt-6 font-semibold text-lg">
          Total: ₹{totalPrice.toFixed(2)}
        </div>
      </div>
    </div>
  );
};

export default Cart;
