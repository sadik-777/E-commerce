import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import ProductItem from '../ProductItem/index';   // adjust path if needed
import ProductNew from '../ProductNew/index';     // adjust path if needed

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';

const HomeCat = () => {
  const products = [1, 2, 3, 4, 5, 6];

  return (
    <section className="py-10 bg-white">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap -mx-4">

          {/* 1. LEFT SIDEBAR */}
          <div className="hidden lg:block lg:w-1/4 px-4">
            <div className="sticky top-5">
              <img
                src="https://klbtheme.com/bacola/wp-content/uploads/2021/04/banner-box.jpg"
                alt="sidebar-banner"
                className="w-full rounded-lg mb-4 hover:opacity-90 transition-opacity"
              />
              <img
                src="https://klbtheme.com/bacola/wp-content/uploads/2021/04/bacola-banner-04.jpg"
                alt="sidebar-banner-2"
                className="w-full rounded-lg shadow-sm"
              />
            </div>
          </div>

          {/* 2. RIGHT SIDE: Best Sellers Slider + New Products Grid */}
          <div className="w-full lg:w-3/4 px-4">

            {/* --- BEST SELLERS SECTION --- */}
            <div className="flex items-center justify-between mb-6">
              <div>
                <h3 className="text-xl font-bold text-gray-800 uppercase tracking-tight">
                  Best Sellers
                </h3>
                <p className="text-sm text-gray-400">
                  Do not miss the current offers until the end of March.
                </p>
              </div>
            </div>

            {/* Slider container (relative for button positioning) */}
            <div className="relative product-slider-container mb-12">

              {/* Custom Previous Button */}
              <button
                className="custom-prev absolute top-1/2 -left-5 z-50 w-10 h-10 bg-white rounded-full shadow-md border border-gray-100 flex items-center justify-center hover:bg-[#2bbef9] hover:text-white transition-all text-gray-800 -translate-y-1/2"
                aria-label="Previous slide"
              >
                <span className="font-black text-sm">‹</span>
              </button>

              {/* Custom Next Button */}
              <button
                className="custom-next absolute top-1/2 -right-5 z-50 w-10 h-10 bg-white rounded-full shadow-md border border-gray-100 flex items-center justify-center hover:bg-[#2bbef9] hover:text-white transition-all text-gray-800 -translate-y-1/2"
                aria-label="Next slide"
              >
                <span className="font-black text-sm">›</span>
              </button>

              {/* Swiper Slider */}
              <Swiper
                modules={[Navigation]}
                navigation={{
                  prevEl: '.custom-prev',
                  nextEl: '.custom-next',
                }}
                slidesPerView={4}
                spaceBetween={0}
                slidesPerGroup={1}
                loop={true}
                className="mySwiper"
              >
                {products.map((item, index) => (
                  <SwiperSlide key={index}>
                    <ProductItem />
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>

            {/* New Products Section */}
            <div className="mt-10">
              <ProductNew />
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default HomeCat;