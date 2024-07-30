import { useState } from "react";
import Navbar, { IProduct } from "./components/Navbar";
import Hero from "./components/Hero";
import Services from "./components/Services";
import FeatureProducts from "./components/FeatureProducts";
import Footer from "./components/Footer";
import Cart from "./components/Cart";

const App = () => {
    const [cart, setCart] = useState<IProduct[]>([]);
    const [cartOpen, setCartOpen] = useState(false);

    return (
        <main>
            {/* Navbar with cart and cartOpen state */}
            <Navbar cart={cart} setCartOpen={setCartOpen} />
            
            {/* Static and dynamic content */}
            <div className="container mx-auto p-4">
               
                
                    
                
            </div>
            
            <Hero />
            <Services />
            <FeatureProducts setCart={setCart} />
            <Footer />
            
            {/* Conditionally render the Cart component */}
            {cartOpen && <Cart cart={cart} setCartOpen={setCartOpen} setCart={setCart} />}
        </main>
    );
}

export default App;
