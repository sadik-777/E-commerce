import Dialog from '@mui/material/Dialog';
import Button from '@mui/material/Button';
import { MdClose } from "react-icons/md";
import Rating from '@mui/material/Rating';
import ProductZoom from '../ProductZoom/index'
import { FaRegHeart, FaCheck } from "react-icons/fa";
import { BsArrowDownUp } from "react-icons/bs";
import {useState, useContext } from 'react';
import QuantityBox from '../../Component/QuantityBox/index';
import { Mycontext } from '../../App';
const ProductModal = () => {
    const [value] = useState(2.5);
    const context = useContext(Mycontext);



    return (
        <Dialog
            open={true}
            onClose={() => context.setIsopenProductModel(false)}
            PaperProps={{
                sx: { width: '800px', maxWidth: '800px', borderRadius: '12px', padding: '10px' }
            }}
        >
            {/* Close Button */}
            <Button
                onClick={() => context.setIsopenProductModel(false)}
                className="absolute! right-2! top-2! min-w-0! w-9! h-9! rounded-full! bg-gray-100! text-black! hover:bg-gray-200!"
            >
                <MdClose size={18} />
            </Button>

            {/* Title */}
            <h4 className='font-bold text-xl px-4 pt-4 mb-1 text-gray-800'>
                All Natural Italian-Style Chicken Meatballs
            </h4>

            {/* Brands + Rating + SKU */}
            <div className="flex items-center gap-3 px-4 mb-3 text-sm text-gray-500">
                <span>Brands: <strong className="text-gray-700">Welch's</strong></span>
                <span className="text-gray-300">|</span>
                <Rating name="read-only" value={value} size='small' precision={0.5} readOnly />
                <span className="text-gray-500 text-xs">1 REVIEW</span>
                <span className="text-gray-300">|</span>
                <span>SKU: <strong className="text-gray-700">ZU49VOR</strong></span>
            </div>

            <hr className="mb-3" />

            {/* Body */}
            <div className="flex flex-wrap px-4 pb-4">

                {/* Left - Images */}
                <div className="w-full md:w-5/12 pr-4">
                    <ProductZoom/>

                    {/* Big Zoom Slider */}
                </div>

                {/* Right - Info */}
                <div className="w-full md:w-7/12 pl-4">
                    {/* Price */}
                    <div className="flex items-center gap-3 mb-3">
                        <span className="text-base font-bold text-black/30 line-through">$9.35</span>
                        <span className="text-2xl font-bold text-red-500">$7.25</span>
                    </div>
                    {/* In Stock */}
                    <span className='bg-green-100 text-green-600 text-[11px] rounded-2xl px-3 py-1 font-medium'>
                        IN STOCK
                    </span>

                    {/* Description */}
                    <p className='text-[13px] text-gray-500 mt-3 leading-relaxed'>
                        Vivamus adipiscing nisl ut dolor dignissim semper. Nulla luctus
                        malesuada tincidunt. Class aptent taciti sociosqu ad litora torquent
                    </p>

                    {/* Quantity + Add to cart */}
                    <div className="flex items-center gap-3 mt-4">
                        <QuantityBox />
                        <Button className='!bg-blue-900 !rounded-3xl !text-white !px-8 !py-3 !text-[13px] !font-bold !normal-case'>
                            Add to cart
                        </Button>
                    </div>

                    {/* Wishlist + Compare */}
                    <div className='flex items-center gap-3 mt-4'>
                        <Button className='!rounded-2xl !text-gray-600 !border-gray-300 !text-[11px] !py-1.5 !px-3 !normal-case' variant="outlined">
                            <FaRegHeart className="mr-1" /> ADD TO WISHLIST
                        </Button>
                        <Button className='!text-gray-600 !text-[11px] !py-1.5 !normal-case' variant="text">
                            <BsArrowDownUp className="mr-1" /> COMPARE
                        </Button>
                    </div>

                    <hr className="my-4" />

                    {/* Product Details */}
                    <div className="flex flex-col gap-2 text-[13px] text-gray-600">
                        <div className="flex items-center gap-2">
                            <FaCheck className="text-green-500" />
                            <span>Type: <strong>Organic</strong></span>
                        </div>
                        <div className="flex items-center gap-2">
                            <FaCheck className="text-green-500" />
                            <span>MFG: <strong>Jun 4.2021</strong></span>
                        </div>
                        <div className="flex items-center gap-2">
                            <FaCheck className="text-green-500" />
                            <span>LIFE: <strong>30 days</strong></span>
                        </div>
                    </div>

                    <hr className="my-4" />

                    {/* Category & Tags */}
                    <div className="text-[13px] text-gray-500 flex flex-col gap-1">
                        <span>Category: <strong className="text-gray-700">Meats & Seafood</strong></span>
                        <span>Tags: <strong className="text-gray-700">chicken, natural, organic</strong></span>
                    </div>
                </div>
            </div>
        </Dialog>
    );
};

export default ProductModal;