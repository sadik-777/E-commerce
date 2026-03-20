import { Link } from 'react-router-dom';
import Button from '@mui/material/Button';
import { CiMenuBurger } from "react-icons/ci";
import { FaAngleDown } from "react-icons/fa6";
import { GiSteak } from "react-icons/gi";
import { LiaCookieSolid } from "react-icons/lia";
import { PiCoffeeFill } from "react-icons/pi";
import { IoIosArrowForward } from "react-icons/io";
import { CiApple } from "react-icons/ci";
import { LuEgg } from "react-icons/lu";
import { IoSnowOutline } from "react-icons/io5";
import { PiCookieLight, PiLeafLight } from "react-icons/pi";
import { useState } from 'react';
const CategoryItem = ({ icon, title, hasSub = false }) => (
    <li className="flex items-center gap-4 px-5 py-3 focus:bg-[#f1f1f1] cursor-pointer group/item transition-all list-none">
        <span className="text-[22px] text-gray-400 group-hover/item:text-[#2bbef9]">{icon}</span>
        <span className="text-[14px] font-medium text-[#4d4d4d] group-hover/item:text-[#2bbef9]">{title}</span>
        {hasSub && <span className="ml-auto text-gray-400 text-xs"><IoIosArrowForward /></span>}
    </li>
);
const Navigation = () => {
    const [openCategorie, setopenCategorie] = useState(false)
    return (
        <nav className="shrink-0 relative">
            <div className="justify-between! container mx-auto w-[90%] max-w-[90%] flex items-center gap-8 mt-4">
<div className="shrink-0 group relative"> {/* Zdna group w relative hna */}
            <Button 
        onClick={() => setopenCategorie(!openCategorie)}
        className='bg-[#2bbef9]! rounded-full! py-2.5! px-6! flex! flex-col! items-center! justify-center! min-w-60! transition-all relative overflow-visible!'>
        <div className="flex items-center justify-between w-full">
            <span className='mr-3 text-white text-lg!'><CiMenuBurger/></span>
            <span className='text-white font-bold text-[13px]'>ALL CATEGORIES</span>
            <span className='ml-auto text-white text-sm!'><FaAngleDown/></span>
        </div>
        <span className="absolute -bottom-2 left-1/2 -translate-x-1/2 bg-[#e8f3fe] text-[#71778e] text-[9px] font-bold px-3 py-0.5 rounded-full border border-white whitespace-nowrap">
            TOTAL 63 PRODUCTS
        </span>
    </Button>
    {openCategorie &&(
        <div className="absolute top-[110%] left-0 w-full min-w-60 bg-white shadow-xl border border-gray-100 rounded-lg py-2 z-50">
            <ul className="flex flex-col">
                <CategoryItem icon={<CiApple />} title="Fruits & Vegetables" hasSub={true} />
                <CategoryItem icon={<GiSteak />} title="Meats & Seafood" />
                <CategoryItem icon={<LuEgg />} title="Breakfast & Dairy" />
                <CategoryItem icon={<PiCoffeeFill />} title="Beverages" hasSub={true} />
                <CategoryItem icon={<LiaCookieSolid />} title="Breads & Bakery" />
                <CategoryItem icon={<IoSnowOutline />} title="Frozen Foods" />
                <CategoryItem icon={<PiCookieLight />} title="Biscuits & Snacks" />
                <CategoryItem icon={<PiLeafLight />} title="Grocery & Staples" />
                <hr className="my-2 border-gray-100" />
                <li className="px-5 py-2.5 text-[14px] font-semibold text-[#2b2b2b] hover:bg-[#f1f1f1] cursor-pointer transition-colors">Value of the Day</li>
                <li className="px-5 py-2.5 text-[14px] font-semibold text-[#2b2b2b] hover:bg-[#f1f1f1] cursor-pointer transition-colors">Top 100 Offers</li>
                <li className="px-5 py-2.5 text-[14px] font-semibold text-[#2b2b2b] hover:bg-[#f1f1f1] cursor-pointer transition-colors">New Arrivals</li>
            </ul>
        </div>
    )}
</div>
                {/* 2. Navigation Links */}
                <div className="">
                    <ul className='flex items-center gap-6'>
                    <li className='relative list-none group'>
                                <Link 
                                    to="/" 
                                    className="flex items-center gap-2 px-5 py-2 rounded-full bg-[#2bbef91a] transition-all hover:bg-[#2bbef926]"
                                >
                                    <Button className='text-[14px] font-bold text-[#2bbef9] uppercase tracking-wide'>
                                        Home
                                    </Button>
                                    <span className='text-[#2bbef9] text-[12px]'>
                                        <FaAngleDown />
                                    </span>
                                </Link>
                                <div className='absolute top-[158%]! -right-13 min-w-55 bg-white transition-all duration-300 ease-in-out opacity-0 invisible shadow  group-hover:opacity-100 visible z-50'>
                                    <Link to="/home1" className='block! w-full!'><Button className='w-full! justify-items-start! rounded-0! capitalize! font-bold! text-black! hover-bg-[#f1f1f1]!'>Home1</Button></Link>
                                    <Link to="/home2" className='block! w-full!'><Button className='w-full! justify-items-start! rounded-0! capitalize! font-bold! text-black! hover-bg-[#f1f1f1]!'>Home2</Button></Link>
                                    <Link to="/home3" className='block! w-full!'><Button className='w-full! justify-items-start! rounded-0! capitalize! font-bold! text-black! hover-bg-[#f1f1f1]!'>Home3</Button></Link>
                                    <Link to="/home4" className='block! w-full!'><Button className='w-full! justify-items-start! rounded-0! capitalize! font-bold! text-black! hover-bg-[#f1f1f1]!'>Home4</Button></Link>
                                    <Link to="/home5" className='block! w-full!'><Button className='w-full! justify-items-start! rounded-0! capitalize! font-bold! text-black! hover-bg-[#f1f1f1]!'>Home5</Button></Link>
                                </div>
                            </li>
                            <li className='list-none group relative'>
    {/* Button dial Shop */}
    <Link 
        to="/shop" 
        className="group flex items-center gap-2 px-5 py-2 rounded-full transition-all hover:bg-[#2bbef91a]"
    >
        <span className="text-[14px] font-bold text-[#2b2b2b] uppercase tracking-wide group-hover:text-[#2bbef9] transition-all">
            Shop
        </span>
        <span className="text-[#2b2b2b] text-[12px] group-hover:text-[#2bbef9] transition-all">
            <FaAngleDown />
        </span>
    </Link>

    {/* Mega Menu Dropdown */}
    <div className="absolute top-[190%] -left-100 w-[1100px] bg-white shadow-lg border-t-2 border-[#2bbef9] p-8 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-50">
        <div className="grid grid-cols-6 gap-6">
            
            {/* Column 1: Shop Lists */}
            <div className="flex flex-col gap-3">
                <h4 className="text-[#2bbef9] font-bold text-[15px] mb-2">Shop Lists</h4>
                <Link to="#" className="text-[#555] text-[14px] hover:text-[#2bbef9]">Shop Default</Link>
                <Link to="#" className="text-[#555] text-[14px] hover:text-[#2bbef9]">Shop Right Sidebar</Link>
                <Link to="#" className="text-[#555] text-[14px] hover:text-[#2bbef9]">Shop Wide</Link>
                <Link to="#" className="text-[#555] text-[14px] hover:text-[#2bbef9]">List Left Sidebar</Link>
                <Link to="#" className="text-[#555] text-[14px] hover:text-[#2bbef9]">Load More Button</Link>
                <Link to="#" className="text-[#555] text-[14px] hover:text-[#2bbef9]">Infinite Scrolling</Link>
                <Link to="#" className="text-[#555] text-[14px] hover:text-[#2bbef9]">Product Box Variable</Link>
                <Link to="#" className="text-[#555] text-[14px] hover:text-[#2bbef9]">Catalog Mode</Link>
                <Link to="#" className="text-[#555] text-[14px] hover:text-[#2bbef9]">Product SKU</Link>
                <Link to="#" className="text-[#555] text-[14px] hover:text-[#2bbef9]">Additional Information</Link>
            </div>

            {/* Column 2: Product Detail */}
            <div className="flex flex-col gap-3">
                <h4 className="text-[#1a3a5f] font-bold text-[15px] mb-2">Product Detail</h4>
                <Link to="#" className="text-[#555] text-[14px] hover:text-[#2bbef9]">Product Default</Link>
                <Link to="#" className="text-[#555] text-[14px] hover:text-[#2bbef9]">Product Variable</Link>
                <Link to="#" className="text-[#555] text-[14px] hover:text-[#2bbef9]">Product Grouped</Link>
                <Link to="#" className="text-[#555] text-[14px] hover:text-[#2bbef9]">Product External</Link>
                <Link to="#" className="text-[#555] text-[14px] hover:text-[#2bbef9]">Product Downloadable</Link>
                <Link to="#" className="text-[#555] text-[14px] hover:text-[#2bbef9]">Product With Video</Link>
                <Link to="#" className="text-[#555] text-[14px] hover:text-[#2bbef9]">Thumbnails Left</Link>
                <Link to="#" className="text-[#555] text-[14px] hover:text-[#2bbef9]">Gallery 1 Column</Link>
                <Link to="#" className="text-[#555] text-[14px] hover:text-[#2bbef9]">Gallery 2 Columns</Link>
                <Link to="#" className="text-[#555] text-[14px] hover:text-[#2bbef9]">Carousel 2 Columns</Link>
            </div>

            {/* Column 3: Product Features */}
            <div className="flex flex-col gap-3">
                <h4 className="text-[#1a3a5f] font-bold text-[15px] mb-2">Product Features</h4>
                <Link to="#" className="text-[#555] text-[14px] hover:text-[#2bbef9]">Order on WhatsApp</Link>
                <Link to="#" className="text-[#555] text-[14px] hover:text-[#2bbef9]">Buy Now Button</Link>
                <Link to="#" className="text-[#555] text-[14px] hover:text-[#2bbef9]">Sticky Add to Cart</Link>
                <Link to="#" className="text-[#555] text-[14px] hover:text-[#2bbef9]">Sticky Tab Titles</Link>
                <Link to="#" className="text-[#555] text-[14px] hover:text-[#2bbef9]">Reviews Without Tab</Link>
                <Link to="#" className="text-[#555] text-[14px] hover:text-[#2bbef9]">Vertical Tabs</Link>
                <Link to="#" className="text-[#555] text-[14px] hover:text-[#2bbef9]">Accordion Tabs</Link>
                <Link to="#" className="text-[#555] text-[14px] hover:text-[#2bbef9]">Accordion in Content</Link>
                <Link to="#" className="text-[#555] text-[14px] hover:text-[#2bbef9]">Low Stock Alert</Link>
            </div>

            {/* Column 4: Product Types */}
            <div className="flex flex-col gap-3">
                <h4 className="text-[#1a3a5f] font-bold text-[15px] mb-2">Product Types</h4>
                <Link to="#" className="text-[#555] text-[14px] hover:text-[#2bbef9]">Single Type 1</Link>
                <Link to="#" className="text-[#555] text-[14px] hover:text-[#2bbef9]">Single Type 2</Link>
                <Link to="#" className="text-[#555] text-[14px] hover:text-[#2bbef9]">Single Type 3</Link>
                <Link to="#" className="text-[#555] text-[14px] hover:text-[#2bbef9]">Single Type 4</Link>
                <Link to="#" className="text-[#555] text-[14px] hover:text-[#2bbef9]">Single Shipping Class</Link>
                <Link to="#" className="text-[#555] text-[14px] hover:text-[#2bbef9]">People Added In Cart</Link>
                <Link to="#" className="text-[#555] text-[14px] hover:text-[#2bbef9]">Zoom Image</Link>
            </div>

            {/* Column 5: Shop Pages */}
            <div className="flex flex-col gap-3">
                <h4 className="text-[#1a3a5f] font-bold text-[15px] mb-2">Shop Pages</h4>
                <Link to="#" className="text-[#555] text-[14px] hover:text-[#2bbef9]">Cart</Link>
                <Link to="#" className="text-[#555] text-[14px] hover:text-[#2bbef9]">Checkout</Link>
                <Link to="#" className="text-[#555] text-[14px] hover:text-[#2bbef9]">My account</Link>
                <Link to="#" className="text-[#555] text-[14px] hover:text-[#2bbef9]">Wishlist</Link>
                <Link to="#" className="text-[#555] text-[14px] hover:text-[#2bbef9]">Order Tracking</Link>
                <Link to="#" className="text-[#555] text-[14px] hover:text-[#2bbef9]">Featured Products</Link>
                <Link to="#" className="text-[#555] text-[14px] hover:text-[#2bbef9]">Shop by Brand</Link>
            </div>

            {/* Column 6: Shop Layouts */}
            <div className="flex flex-col gap-3">
                <h4 className="text-[#1a3a5f] font-bold text-[15px] mb-2">Shop Layouts</h4>
                <Link to="#" className="text-[#555] text-[14px] hover:text-[#2bbef9]">Two Columns</Link>
                <Link to="#" className="text-[#555] text-[14px] hover:text-[#2bbef9]">Three Columns</Link>
                <Link to="#" className="text-[#555] text-[14px] hover:text-[#2bbef9]">Three Columns Wide</Link>
                <Link to="#" className="text-[#555] text-[14px] hover:text-[#2bbef9]">Four Columns</Link>
                <Link to="#" className="text-[#555] text-[14px] hover:text-[#2bbef9]">Four Columns Wide</Link>
                <Link to="#" className="text-[#555] text-[14px] hover:text-[#2bbef9]">Five Columns wide</Link>
            </div>

        </div>
    </div>
</li>
                        <li className='list-none'>
                            <Link 
                                to="/meats-seafood" 
                                className="group relative flex items-center gap-2 px-5 py-2 rounded-full transition-all hover:bg-[#2bbef91a]"
                            >
                                <span className='text-[#2b2b2b] text-[22px]! group-hover:text-[#2bbef9] transition-all'><GiSteak/></span>
                                <span className="text-[14px] font-bold text-[#2b2b2b] uppercase tracking-wide group-hover:text-[#2bbef9] transition-all">
                                meats & seafood
                                </span>
                            </Link>
                        </li>
                        <li className='list-none'>
                            <Link 
                                to="/breads-bakery" 
                                className="group relative flex items-center gap-2 px-5 py-2 rounded-full transition-all hover:bg-[#2bbef91a]"
                            >
                                <span className='text-[#2b2b2b] text-[22px]! group-hover:text-[#2bbef9] transition-all'><LiaCookieSolid/></span>
                                <span className="text-[14px] font-bold text-[#2b2b2b] uppercase tracking-wide group-hover:text-[#2bbef9] transition-all">
                                bakery
                                </span>
                            </Link>
                        </li>
                        <li className='list-none'>
                            <Link 
                                to="/beverages" 
                                className="group relative flex items-center gap-2 px-5 py-2 rounded-full transition-all hover:bg-[#2bbef91a]"
                            >
                                <span className='text-[#2b2b2b] text-[22px]! group-hover:text-[#2bbef9] transition-all'><PiCoffeeFill/></span>
                                <span className="text-[14px] font-bold text-[#2b2b2b] uppercase tracking-wide group-hover:text-[#2bbef9] transition-all">
                                bakery
                                </span>
                            </Link>
                        </li>
                        <li className='list-none'>
                            <Link 
                                to="/beverages" 
                                className="group relative flex items-center gap-2 px-5 py-2 rounded-full transition-all hover:bg-[#2bbef91a]"
                            >
                                <span className="text-[14px] font-bold text-[#2b2b2b] uppercase tracking-wide group-hover:text-[#2bbef9] transition-all">
                                blog
                                </span>
                            </Link>
                        </li>
                        <li className='list-none'>
                            <Link 
                                to="/beverages" 
                                className="group relative flex items-center gap-2 px-5 py-2 rounded-full transition-all hover:bg-[#2bbef91a]"
                            >
                                <span className="text-[14px] font-bold text-[#2b2b2b] uppercase tracking-wide group-hover:text-[#2bbef9] transition-all">
                                Contact
                                </span>
                            </Link>
                        </li>
                    </ul>
                </div>
                
            </div>
        </nav>
    );
}

export default Navigation;