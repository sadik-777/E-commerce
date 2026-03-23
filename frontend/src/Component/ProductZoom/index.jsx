import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import InnerImageZoom from 'react-inner-image-zoom';
import 'react-inner-image-zoom/lib/styles.min.css';
import { useRef, useState} from 'react';
const ProductZoom = ()=>{
    const images = [
        'https://klbtheme.com/bacola/wp-content/uploads/2021/04/product-image-62.jpg',
        'https://klbtheme.com/bacola/wp-content/uploads/2021/04/product-image2-47.jpg',
        'https://klbtheme.com/bacola/wp-content/uploads/2021/04/product-image3-35.jpg',
    ];
    const [slideIndex, setSlideIndex] = useState(0);
    const zoomSliderBig = useRef();
    const zoomSlider = useRef();

    const goto = (index) => {
        setSlideIndex(index);
        zoomSlider.current.swiper.slideTo(index);
        zoomSliderBig.current.swiper.slideTo(index);
    };
    return(
        <div className=''>
                            <div className="relative">
                        {/* Badges */}
                        <span className="absolute top-2 left-2 z-10 bg-blue-500 text-white text-[11px] font-bold px-2 py-1 rounded">
                            23%
                        </span>
                        <span className="absolute top-9 left-2 z-10 bg-gray-700 text-white text-[11px] font-bold px-2 py-1 rounded">
                            RECOMMENDED
                        </span>

                        <Swiper
                            ref={zoomSliderBig}
                            modules={[Navigation]}
                            navigation
                            spaceBetween={10}
                            slidesPerView={1}
                        >
                            {images.map((img, i) => (
                                <SwiperSlide key={i}>
                                    <InnerImageZoom
                                        zoomType="hover"
                                        zoomScale={1}
                                        src={img}
                                    />
                                </SwiperSlide>
                            ))}
                        </Swiper>
                    </div>

                    {/* Thumbnail Slider */}
                    <Swiper
                        ref={zoomSlider}
                        spaceBetween={8}
                        slidesPerView={4}
                        className="mt-3"
                    >
                        {images.map((img, i) => (
                            <SwiperSlide key={i}>
                                <div
                                    onClick={() => goto(i)}
                                    className={`cursor-pointer overflow-hidden rounded-md border-2 transition-all ${
                                        slideIndex === i ? 'border-blue-400' : 'border-transparent'
                                    }`}
                                >
                                    <img src={img} className="w-full h-full object-cover" />
                                </div>
                            </SwiperSlide>
                        ))}
                    </Swiper>
        </div>
    )
}
export default ProductZoom