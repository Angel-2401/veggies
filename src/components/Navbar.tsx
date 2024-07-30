import { SetStateAction } from "react";
import { BiSupport } from "react-icons/bi";
import { CiMenuFries, CiSearch } from "react-icons/ci";
import { FaRegHeart } from "react-icons/fa";
import { MdOutlineShoppingCart } from "react-icons/md";

export interface IProduct {
    id: number;
    img: string;
    name: string;
    price: number;
    quantity: number;
}

interface PropsType {
    setCartOpen: React.Dispatch<SetStateAction<boolean>>;
    cart: IProduct[]; // Ensure cart is included in props type
}

const Navbar = ({ setCartOpen, cart }: PropsType) => { // Destructure cart here
    return (
        <div className="flex flex-col gap-4 text-2xl text-gray-500">
            {/* Top Navbar Section */}
            <div className="container flex items-center justify-between gap-8 mb-4 pt-4">
                <div className="text-4xl font-semibold">Veggies</div>

                {/* Search Bar */}
                <div className="relative w-full hidden sm:block">
                    <input
                        className="py-2 px-4 outline-none border border-gray-300 rounded-md w-full"
                        type="text"
                        placeholder="I'm shopping for..."
                        aria-label="Search"
                    />
                    <button
                        className="absolute top-0 right-0 bg-accent hover:bg-accentDark text-white text-md flex items-center gap-2 px-4 h-full rounded-r-md"
                        aria-label="Search"
                    >
                        <p>SEARCH</p>
                        <CiSearch className="text-xl" />
                    </button>
                </div>

                {/* Cart and Favorites */}
                <div className="flex gap-4 text-2xl text-gray-500">
                    <div
                        className="relative cursor-pointer"
                        onClick={() => setCartOpen(true)}
                        aria-label="View Cart"
                    >
                        <MdOutlineShoppingCart />
                        <div className="bg-accent text-white text-sm rounded-full grid place-items-center absolute left-2 top-[-10px] w-5 h-5">
                            {cart.length}
                        </div>
                    </div>

                    <FaRegHeart aria-label="Favorites" />
                </div>
            </div>

            {/* Bottom Navbar Section */}
            <div className="border-t border-b border-gray-300 mt-8 lg:block hidden">
                <div className="flex items-center justify-between container">
                    <div className="flex items-center gap-12">
                        <button className="bg-accent text-white flex items-center gap-4 py-4 px-4 rounded-md">
                            <CiMenuFries size={24} />
                            <p>BROWSE CATEGORY</p>
                        </button>
                        <ul className="flex items-center gap-6">
                            <li>HOME</li>
                            <li>SHOP</li>
                            <li>VENDORS</li>
                            <li>ABOUT US</li>
                        </ul>
                    </div>

                    <div className="flex items-center gap-4 text-gray-500">
                        <BiSupport />
                        <p>(+91)771-0945-309</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Navbar;
