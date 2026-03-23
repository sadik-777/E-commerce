import { useState, useRef } from 'react';
import Rating from '@mui/material/Rating';
import Button from '@mui/material/Button';
import { FaCheck, FaFacebookF, FaTwitter, FaPinterestP, FaLinkedinIn, FaRedditAlien, FaWhatsapp } from 'react-icons/fa';
import { IoMdHeartEmpty } from 'react-icons/io';
import { BsCheckLg } from 'react-icons/bs';
import { TbTruckDelivery } from 'react-icons/tb';
import { MdOutlineLocalOffer } from 'react-icons/md';
import { GiReturnArrow } from 'react-icons/gi';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import InnerImageZoom from 'react-inner-image-zoom';
import ProductTabs from '../ProductTabs/index'
import RelatedProduct from '../ProductDetails/RelatedProduct/index'
import 'swiper/css';
import 'swiper/css/navigation';
import 'react-inner-image-zoom/lib/styles.min.css';
import QuantityBox from '../../Component/QuantityBox';

const images = [
    'https://klbtheme.com/bacola/wp-content/uploads/2021/04/product-image-62.jpg',
    'https://klbtheme.com/bacola/wp-content/uploads/2021/04/product-image2-47.jpg',
    'https://klbtheme.com/bacola/wp-content/uploads/2021/04/product-image3-35.jpg',
];

const ProductDetails = () => {
    const [slideIndex, setSlideIndex] = useState(0);
    const [rating] = useState(3.5);
    const zoomSliderBig = useRef(null);  // ✅ fix
    const zoomSlider = useRef(null);      // ✅ fix

    const goto = (index) => {
        setSlideIndex(index);
        zoomSlider.current?.slideTo(index);
        zoomSliderBig.current?.slideTo(index);
    };

    return (
        <section className="py-10 bg-[#f5f5f5]">
            <div className="container mx-auto px-4">
                <div className="bg-white rounded-xl p-8">

                    {/* Title + Meta */}
                    <h2 className="text-2xl font-bold text-gray-800 mb-2">
                        All Natural Italian-Style Chicken Meatballs
                    </h2>
                    <div className="flex items-center gap-3 text-sm text-gray-500 mb-6 pb-4 border-b border-gray-100">
                        <span>Brands: <strong className="text-gray-700">Welch's</strong></span>
                        <span className="text-gray-300">|</span>
                        <Rating value={rating} size="small" precision={0.5} readOnly />
                        <span className="text-xs">1 REVIEW</span>
                        <span className="text-gray-300">|</span>
                        <span>SKU: <strong className="text-gray-700">ZU49VOR</strong></span>
                    </div>

                    {/* Main Content */}
                    <div className="flex gap-6">

                        {/* Left - Images */}
                        <div className="w-[35%] flex-[0_0_35%]">
                            <div className="relative">
                                <span className="absolute top-2 left-2 z-10 bg-[#2bbef9] text-white text-[11px] font-bold px-2 py-1 rounded">23%</span>
                                <span className="absolute top-9 left-2 z-10 bg-gray-600 text-white text-[9px] font-bold px-2 py-1 rounded uppercase">RECOMMENDED</span>

                                <Swiper
                                    onSwiper={(swiper) => (zoomSliderBig.current = swiper)}
                                    modules={[Navigation]}
                                    navigation
                                    slidesPerView={1}
                                >
                                    {images.map((img, i) => (
                                        <SwiperSlide key={i}>
                                            <InnerImageZoom zoomType="hover" zoomScale={1} src={img} />
                                        </SwiperSlide>
                                    ))}
                                </Swiper>
                            </div>

                            <Swiper
                                onSwiper={(swiper) => (zoomSlider.current = swiper)}
                                spaceBetween={8}
                                slidesPerView={4}
                                className="mt-3"
                            >
                                {images.map((img, i) => (
                                    <SwiperSlide key={i}>
                                        <div
                                            onClick={() => goto(i)}
                                            className={`cursor-pointer overflow-hidden rounded-md border-2 transition-all ${slideIndex === i ? 'border-blue-400' : 'border-transparent'}`}
                                        >
                                            <img src={img} className="w-full h-full object-cover" />
                                        </div>
                                    </SwiperSlide>
                                ))}
                            </Swiper>
                        </div>

                        {/* Middle - Info */}
                        <div className="w-[40%] flex-[0_0_40%] px-6">
                            <div className="flex items-center gap-3 mb-3">
                                <span className="text-base text-gray-400 line-through">$9.35</span>
                                <span className="text-2xl font-bold text-red-500">$7.25</span>
                            </div>

                            <span className="bg-green-100 text-green-600 text-[11px] font-medium px-3 py-1 rounded-full mb-4 inline-block">
                                IN STOCK
                            </span>

                            <p className="text-[13px] text-gray-500 leading-relaxed mt-3 mb-5">
                                Vivamus adipiscing nisl ut dolor dignissim semper. Nulla luctus malesuada tincidunt. Class aptent taciti sociosqu ad litora torquent
                            </p>

                            <div className="flex items-center gap-3 mb-5">
                                <QuantityBox />
                                <Button className="!bg-[#1a2f6e] !text-white !rounded-3xl !px-8 !py-3 !text-[13px] !font-bold !normal-case hover:!bg-[#2bbef9]">
                                    Add to cart
                                </Button>
                            </div>

                            <div className="flex items-center gap-3 mb-5">
                                <Button variant="outlined" className="!rounded-full !text-gray-600 !border-gray-300 !text-[11px] !normal-case !py-1.5 !px-3">
                                    <IoMdHeartEmpty className="mr-1" /> ADD TO WISHLIST
                                </Button>
                                <Button variant="text" className="!text-gray-600 !text-[11px] !normal-case">
                                    <BsCheckLg className="mr-1" /> COMPARE
                                </Button>
                            </div>

                            <div className="flex flex-col gap-2 text-[13px] text-gray-600 mb-5">
                                {[
                                    { label: 'Type', value: 'Organic' },
                                    { label: 'MFG', value: 'Jun 4.2021' },
                                    { label: 'LIFE', value: '30 days' },
                                ].map((item, i) => (
                                    <div key={i} className="flex items-center gap-2">
                                        <FaCheck className="text-green-500" />
                                        <span>{item.label}: <strong>{item.value}</strong></span>
                                    </div>
                                ))}
                            </div>

                            <hr className="my-4" />

                            <div className="text-[13px] text-gray-400 flex flex-col gap-1 mb-5">
                                <span>Category: <strong className="text-gray-700">Meats & Seafood</strong></span>
                                <span>Tags: <strong className="text-gray-700">chicken, natural, organic</strong></span>
                                <span>Brand: <strong className="text-gray-700">Welch's</strong></span>
                            </div>

                            <div className="flex items-center gap-2">
                                {[
                                    { icon: <FaFacebookF />, color: 'bg-blue-600' },
                                    { icon: <FaTwitter />, color: 'bg-sky-400' },
                                    { icon: <FaPinterestP />, color: 'bg-red-600' },
                                    { icon: <FaLinkedinIn />, color: 'bg-blue-700' },
                                    { icon: <FaRedditAlien />, color: 'bg-orange-500' },
                                    { icon: <FaWhatsapp />, color: 'bg-green-500' },
                                ].map((s, i) => (
                                    <button key={i} className={`${s.color} text-white w-9 h-9 rounded-full flex items-center justify-center text-[14px] hover:opacity-80 transition-all`}>
                                        {s.icon}
                                    </button>
                                ))}
                            </div>
                        </div>

                        {/* Right - Info Cards */}
                        <div className="w-[25%] flex-[0_0_25%]">
                            <div className="bg-red-50 border border-red-100 text-red-500 text-[12px] font-medium px-4 py-3 rounded-lg mb-4 text-center">
                                Covid-19 Info: We keep delivering.
                            </div>

                            {[
                                { icon: <TbTruckDelivery size={28} />, title: 'Free Shipping apply to all orders over $100' },
                                { icon: <MdOutlineLocalOffer size={28} />, title: 'Guranteed 100% Organic from natural farmas' },
                                { icon: <GiReturnArrow size={28} />, title: '1 Day Returns if you change your mind' },
                            ].map((item, i) => (
                                <div key={i} className="flex items-start gap-3 p-4 border border-gray-100 rounded-lg mb-3">
                                    <span className="text-gray-400 flex-shrink-0">{item.icon}</span>
                                    <p className="text-[12px] text-gray-600 leading-snug">{item.title}</p>
                                </div>
                            ))}
                        </div>

                    </div>
                </div>
            </div>
            <ProductTabs />
            <RelatedProduct />
        </section>
    );
};

export default ProductDetails;