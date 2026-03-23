import Rating from '@mui/material/Rating';

const products = [
    {
        id: 1,
        name: 'Foster Farms Takeout Crispy Classic Buffalo Wings',
        image: 'https://klbtheme.com/bacola/wp-content/uploads/2021/04/product-image-62.jpg',
        inStock: true,
        rating: 3.5,
        reviews: 1,
        oldPrice: null,
        newPrice: '$7.25 – $49.99',
        discount: null,
        isRange: true,
    },
    {
        id: 2,
        name: 'Texas Rio Red Grapefruit',
        image: 'https://klbtheme.com/bacola/wp-content/uploads/2021/04/product-image2-47.jpg',
        inStock: true,
        weight: '1 kg',
        rating: 5,
        reviews: 1,
        oldPrice: '$7.50',
        newPrice: '$4.50',
        discount: '40%',
    },
    {
        id: 3,
        name: 'Organic Sweet Lime',
        image: 'https://klbtheme.com/bacola/wp-content/uploads/2021/04/product-image3-35.jpg',
        inStock: true,
        weight: '1 kg',
        rating: 3.5,
        reviews: 1,
        oldPrice: '$6.99',
        newPrice: '$5.99',
        discount: '15%',
    },
    {
        id: 4,
        name: 'USDA Choice Angus Beef Stew Meat',
        image: 'https://klbtheme.com/bacola/wp-content/uploads/2021/04/product-image-50-600x540.jpg',
        inStock: true,
        rating: 3.5,
        reviews: 1,
        oldPrice: '$79.99',
        newPrice: '$49.99',
        discount: '38%',
    },
];

const RelatedProduct = () => {
    return (
        <div className="container mx-auto px-4 mt-10">
            <h2 className="text-[15px] font-bold uppercase text-gray-800 mb-5">Related Products</h2>

            <div className="grid grid-cols-4 gap-4">
                {products.map((product) => (
                    <div key={product.id} className="bg-white rounded-lg p-4 relative group hover:shadow-lg transition-all duration-300">

                        {/* Discount Badge */}
                        {product.discount && (
                            <span className="absolute top-3 left-3 z-10 bg-[#2bbef9] text-white text-[11px] font-bold px-2 py-1 rounded">
                                {product.discount}
                            </span>
                        )}

                        {/* Image */}
                        <div className="w-full h-[200px] flex items-center justify-center mb-4 overflow-hidden">
                            <img
                                src={product.image}
                                alt={product.name}
                                className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-500"
                            />
                        </div>

                        {/* Info */}
                        <div className="flex flex-col gap-1">
                            <h4 className="text-[14px] font-semibold text-gray-800 leading-tight mb-1">
                                {product.name}
                            </h4>

                            {/* Weight + In Stock */}
                            <div className="flex items-center gap-2">
                                {product.weight && (
                                    <span className="text-[12px] text-gray-400">{product.weight}</span>
                                )}
                                <span className="text-[11px] font-bold text-green-500 uppercase">IN STOCK</span>
                            </div>

                            {/* Rating */}
                            <div className="flex items-center gap-1">
                                <Rating value={product.rating} size="small" precision={0.5} readOnly />
                                <span className="text-[11px] text-gray-400">{product.reviews}</span>
                            </div>

                            {/* Price */}
                            <div className="flex items-center gap-2 mt-1">
                                {product.oldPrice && (
                                    <span className="text-[13px] text-gray-400 line-through">{product.oldPrice}</span>
                                )}
                                <span className={`font-bold ${product.isRange ? 'text-red-500 text-[14px]' : 'text-red-500 text-[16px]'}`}>
                                    {product.newPrice}
                                </span>
                            </div>

                            {/* Button */}
                            <button className="mt-3 w-full border border-[#2bbef9] text-[#2bbef9] rounded-full py-2 text-[12px] font-bold hover:bg-[#2bbef9] hover:text-white transition-all duration-300">
                                {product.isRange ? 'View products' : 'Add to cart'}
                            </button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default RelatedProduct;