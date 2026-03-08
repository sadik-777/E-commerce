import React from 'react';
import ProductItem from '../ProductItem/index';

const ProductNew = () => {
    // Mock data to repeat the ProductItem
    const newProducts = [1, 2, 3, 4, 5, 6, 7, 8];

    return (
        <section className="py-8 bg-white">
            <div className="container mx-auto px-4">
                {/* Header Section */}
                <div className="flex flex-col md:flex-row md:items-center justify-between mb-6 gap-2">
                    <div>
                        <h3 className="text-xl font-bold text-gray-800 uppercase tracking-tight">
                            New Products
                        </h3>
                        <p className="text-xs text-gray-400">
                            New products with updated stocks.
                        </p>
                    </div>
                    <button className="w-fit text-sm font-semibold text-gray-500 border border-gray-200 px-5 py-2 rounded-full hover:bg-blue-600 hover:text-white hover:border-blue-600 transition-all duration-300 shadow-sm flex items-center gap-2">
                        View All <span className="text-lg">→</span>
                    </button>
                </div>

                {/* Grid Container */}
                {/* We use border-t and border-l on the parent, 
                    then border-r and border-b on the items to create a perfect grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 border-t border-l border-gray-100 rounded-xl overflow-hidden shadow-sm">
                    {newProducts.map((item) => (
                        <ProductItem key={item} />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default ProductNew;