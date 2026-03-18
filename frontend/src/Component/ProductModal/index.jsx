import Dialog from '@mui/material/Dialog';
import Button from '@mui/material/Button';
import { MdClose } from "react-icons/md";
import Rating from '@mui/material/Rating';
import Slider from "react-slick";
import InnerImageZoom from 'react-inner-image-zoom';
import 'react-inner-image-zoom/lib/styles.min.css';
import { FaRegHeart } from "react-icons/fa";
import { BsArrowDownUp } from "react-icons/bs";
import { FaCheck } from "react-icons/fa";
import { useRef, useState } from 'react';
import QuantityBox from '../../Component/QuantityBox/index'
import {Mycontext} from '../../App'
import {useContext } from "react";
const ProductModal = (props) => {
    const context = useContext(Mycontext)
    var settings2 = {
        dots: false,
        infinite: false,
        speed: 700,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: true,
    };
    var settings = {
        dots: false,
        infinite: false,
        speed: 500,
        slidesToShow: 5,
        slidesToScroll: 1,
        arrows: true,
    };

    const [value, setValue] = useState(2.5);
    const zoomSliderBig = useRef()
    const zoomSlider = useRef()

    const goto = (index) => {
        zoomSlider.current.slickGoTo(index)
        zoomSliderBig.current.slickGoTo(index)
    }

    return (
        <Dialog
            open={true}
            onClose={()=>context.setIsopenProductModel(false)}
            PaperProps={{
                sx: { width: '800px', maxWidth: '800px', borderRadius: '12px', padding: '10px' }
            }}
        >
            {/* Close Button */}
            <Button
                onClick={()=>context.setIsopenProductModel(false)}
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
                    <div className="productZoom">
                        <div className="w-full md:w-5/12 pr-4">
                            <div className="productZoom relative">
                                {/* Badges */}
                                <span className="absolute top-2 left-2 z-10 bg-blue-500 text-white text-[11px] font-bold px-2 py-1 rounded">
                                    23%
                                </span>
                                <span className="absolute top-8 left-2 z-10 bg-gray-700 text-white text-[11px] font-bold px-2 py-1 rounded mt-1">
                                    RECOMMENDED
                                </span>
                            </div>
                        </div>
                        <Slider {...settings2} className='zoomSliderBig' ref={zoomSliderBig}>
                            <div className='item'>
                                <InnerImageZoom zoomType="hover" zoomScale={1}
                                    src={`https://klbtheme.com/bacola/wp-content/uploads/2021/04/product-image-62.jpg`} />
                            </div>
                            <div className='item'>
                                <InnerImageZoom zoomType="hover" zoomScale={1}
                                    src={`https://klbtheme.com/bacola/wp-content/uploads/2021/04/product-image2-47.jpg`} />
                            </div>
                            <div className='item'>
                                <InnerImageZoom zoomType="hover" zoomScale={1}
                                    src={`https://klbtheme.com/bacola/wp-content/uploads/2021/04/product-image3-35.jpg`} />
                            </div>
                        </Slider>
                    </div>
                    <Slider {...settings} className='zoomSlider mt-2' ref={zoomSlider}>
                        <div className='item'>
                            <img onClick={() => goto(0)} src={`https://klbtheme.com/bacola/wp-content/uploads/2021/04/product-image-62.jpg`} className='w-full cursor-pointer' />
                        </div>
                        <div className='item'>
                            <img onClick={() => goto(1)} src={`https://klbtheme.com/bacola/wp-content/uploads/2021/04/product-image2-47.jpg`} className='w-full cursor-pointer' />
                        </div>
                        <div className='item'>
                            <img onClick={() => goto(2)} src={`https://klbtheme.com/bacola/wp-content/uploads/2021/04/product-image3-35.jpg`} className='w-full cursor-pointer' />
                        </div>
                    </Slider>
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