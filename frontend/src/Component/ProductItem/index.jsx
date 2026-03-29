import React from 'react';
import { TfiFullscreen } from "react-icons/tfi";
import { IoMdHeartEmpty } from "react-icons/io";
import { useState, useContext } from "react";
import { Mycontext } from '../../App';
import ProductDetail from '../../pages/ProductDetails/index'

const ProductItem = (props) => {
  const context = useContext(Mycontext);

  const viewProductDetails = () => {
    context.setIsopenProductModel(true);
  };

  return (
    <div className={`productItem ${props.itemView} group relative p-5 bg-white border-r border-b border-gray-100 flex flex-col h-full hover:shadow-2xl hover:z-20 transition-all duration-300`}>

      {/* Badges */}
      <div className="absolute top-4 left-4 flex flex-col gap-1 z-10">
        <span className="bg-[#2bbef9] text-white text-[11px] font-bold px-2 py-1 rounded-sm w-fit">23%</span>
        <span className="bg-[#f7ba01] text-white text-[9px] font-bold px-2 py-1 rounded-sm uppercase tracking-wider w-fit">Recommended</span>
      </div>

      {/* Hover Action Buttons - fixed with opacity */}
      <div className="absolute top-4 right-4 flex flex-col gap-2 z-10 opacity-0 group-hover:opacity-100 transition-all duration-300">
        <button
          onClick={viewProductDetails}
          className="w-9 h-9 bg-white shadow-md border border-gray-100 rounded-full flex items-center justify-center text-gray-500 hover:bg-blue-600 hover:text-white transition-all"
        >
          <TfiFullscreen size={14} />
        </button>
        <button className="w-9 h-9 bg-white shadow-md border border-gray-100 rounded-full flex items-center justify-center text-gray-500 hover:bg-blue-600 hover:text-white transition-all">
          <IoMdHeartEmpty size={16} />
        </button>
      </div>

      {/* Product Image */}
      <div className="imgWrapper w-full h-45 flex items-center justify-center mb-6 overflow-hidden">
        <img
          src="https://klbtheme.com/bacola/wp-content/uploads/2021/04/product-image-62.jpg"
          alt="Product"
          className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-500"
        />
      </div>

      {/* Product Info */}
      <div className="info flex flex-col grow">
        <h4 className="text-[14px] font-semibold text-[#222] line-clamp-2 leading-tight h-10 mb-2 group-hover:text-[#2bbef9] transition-colors">
          All Natural Italian-Style Chicken Meatballs
        </h4>

        <span className="text-[11px] font-bold text-[#00b853] uppercase mb-1">In Stock</span>

        {/* Ratings */}
        <div className="flex items-center gap-1 mb-2">
          <div className="flex text-[#f7ba01] text-[10px]">
            ★ ★ ★ ★ <span className="text-gray-300">★</span>
          </div>
          <span className="text-gray-400 text-[10px] font-bold">1</span>
        </div>

        {/* Price */}
        <div className="flex items-center gap-2 mb-5">
          <span className="text-[#9b9b9b] line-through text-[14px] font-medium">$9.35</span>
          <span className="text-[#d51243] text-[18px] font-bold">$7.25</span>
        </div>

        {/* Add to Cart */}
        <button className="addToCart mt-auto w-full bg-white border border-[#2bbef9] text-[#2bbef9] rounded-full py-2 px-4 text-[12px] font-bold hover:bg-[#2bbef9] hover:text-white transition-all duration-300">
          Add to cart
        </button>
      </div>
    </div>
  );
};

export default ProductItem;