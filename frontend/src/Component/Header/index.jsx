import { Link } from 'react-router-dom';
import logo from '../../assets/images/logo.png'
import Button from '@mui/material/Button';
import CountryDropDown from '../countryDropDown';
import { LuUser } from "react-icons/lu";
import { HiOutlineShoppingBag } from "react-icons/hi2";
import SearchBox from './SearchBox';
import Navigation from './Navigation';
import Mycontext from '../../App';
import { useContext } from 'react';

const Header = () => {
    const context = useContext(Mycontext)
    return (
        <>
            <header className="flex justify-center items-center">
                <div className="w-full bg-[#233a95] py-2">
                    <p className="font-sans text-white text-center text-[12px] opacity-80">
                        Due to the <b>Covid 19</b> epidemic, orders may be processed with a slight delay
                    </p>
                </div>
            </header>
            
            <div className="w-full border-b border-gray-200 py-5 bg-white">
                <header className="container mx-auto w-[90%] max-w-[90%] flex items-center justify-between px-4">
                    
                    {/* 1. Logo Section */}
                    <div className="flex flex-col items-center shrink-0">
                        <Link to="/">
                            <img className="w-40" src={logo} alt="logo" />
                        </Link>
                        <span className="text-[11px] text-gray-400 mt-1 font-medium tracking-wide">
                            Online Grocery Shopping Center
                        </span>
                    </div>

                    {/* 2. Location & Search Section */}
                    <div className="flex items-center gap-4 flex-1 max-w-[60%] mx-10">
                        {
                            context?.countryList?.length !== 0 && <CountryDropDown />
                        }
                        <SearchBox/>
                    </div>

                    {/* 3. User & Cart Actions */}
                    <div className='flex items-center gap-3'>
                        {/* User Icon */}
                        <Button className='min-w-fit! w-11! h-11! rounded-full! border! border-gray-200! text-[#2b2b2b]! hover:bg-gray-100!'>
                            <LuUser className="text-[22px]"/>
                        </Button>

                        {/* Price */}
                        <span className='text-[16px] font-bold text-[#2b2b2b] ml-2'>$0.00</span>
                        
                        {/* Cart Button */}
                        <div className="relative ml-2">
                            <Link to='/cart'>
                            <Button className='min-w-fit! w-11! h-11! rounded-full! bg-[#fff1ee]! hover:bg-[#ffe4e0]!'>
                                <HiOutlineShoppingBag className="text-[24px] text-[#ea2b0f]"/>
                            </Button>
                            </Link>
                            {/* Notification Badge */}
                            <span className='absolute -top-1 -right-1 flex items-center justify-center bg-[#ea2b0f] text-white text-[11px] font-bold rounded-full w-5 h-5 border-2 border-white'>
                                0
                            </span>
                        </div>
                    </div>
                </header>
                <Navigation/>
            </div>
        </>
    )
}

export default Header;

