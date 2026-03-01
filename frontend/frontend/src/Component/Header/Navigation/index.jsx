import { Link } from 'react-router-dom';
import Button from '@mui/material/Button';
import { CiMenuBurger } from "react-icons/ci";
import { FaAngleDown } from "react-icons/fa6";
import { GiSteak } from "react-icons/gi";
import { LiaCookieSolid } from "react-icons/lia";
import { PiCoffeeFill } from "react-icons/pi";

const Navigation = () => {
    return (
        <nav className="py-2">
            <div className="justify-between! container mx-auto w-[90%] max-w-[90%] flex items-center gap-8 mt-4">
                
                {/* 1. All Categories Button */}
                <div className="shrink-0">
                    <Button className='bg-[#2bbef9]! rounded-full! py-2.5! px-6! flex! items-center! justify-between! min-w-55! hover:bg-[#23a5d9]! transition-all'>
                        <span className='mr-3 text-white text-lg!'><CiMenuBurger/></span>
                        <span className='text-white font-bold text-[13px]'>ALL CATEGORIES</span>
                        <span className='ml-auto text-white text-sm!'><FaAngleDown/></span>
                    </Button>
                </div>
                {/* 2. Navigation Links */}
                <div className="">
                    <ul className='flex items-center gap-6'>
                    <li className='list-none'>
                                <Link 
                                    to="/" 
                                    className="relative flex items-center gap-2 px-5 py-2 rounded-full bg-[#2bbef91a] transition-all hover:bg-[#2bbef926]"
                                >
                                    <span className='text-[14px] font-bold text-[#2bbef9] uppercase tracking-wide'>
                                        Home
                                    </span>
                                    <span className='text-[#2bbef9] text-[12px]'>
                                        <FaAngleDown />
                                    </span>
                                </Link>
                            </li>
                            <li className='list-none'>
                            <Link 
                                to="/shop" 
                                className="group relative flex items-center gap-2 px-5 py-2 rounded-full transition-all hover:bg-[#2bbef91a]"
                            >
                                <span className="text-[14px] font-bold text-[#2b2b2b] uppercase tracking-wide group-hover:text-[#2bbef9] transition-all">
                                    Shop
                                </span>
                                <span className="text-[#2b2b2b] text-[12px] group-hover:text-[#2bbef9] transition-all">
                                    <FaAngleDown />
                                </span>
                            </Link>
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