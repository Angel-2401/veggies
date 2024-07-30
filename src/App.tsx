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
            <Navbar cart={cart} setCartOpen={setCartOpen} />
            <Hero />
            <Services />
            <FeatureProducts setCart={setCart} />
            <Footer />
            
            {cartOpen && <Cart cart={cart} setCartOpen={setCartOpen} setCart={setCart} />} {/* Pass setCart to Cart */}
        </main>
    );
}

export default App;
