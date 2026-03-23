import { useState } from 'react';
import Rating from '@mui/material/Rating';
import { FaUserCircle } from 'react-icons/fa';

const tabs = ['Description', 'Additional Information', 'Reviews (1)'];

const ProductTabs = () => {
    const [activeTab, setActiveTab] = useState(0);
    const [rating, setRating] = useState(0);
    const [saveInfo, setSaveInfo] = useState(false);

    return (
        <div className="container mx-auto px-4 mt-6">
            <div className="bg-white rounded-xl">

                {/* Tab Headers */}
                <div className="flex items-center gap-8 px-6 border-b border-gray-100">
                    {tabs.map((tab, i) => (
                        <button
                            key={i}
                            onClick={() => setActiveTab(i)}
                            className={`py-4 text-[13px] font-bold uppercase tracking-wide transition-all border-b-2 -mb-[1px] ${
                                activeTab === i
                                    ? 'border-gray-800 text-gray-800'
                                    : 'border-transparent text-gray-400 hover:text-gray-600'
                            }`}
                        >
                            {tab}
                        </button>
                    ))}
                </div>

                {/* Tab Content */}
                <div className="p-6">

                    {/* Description */}
                    {activeTab === 0 && (
                        <div className="flex flex-col gap-4 text-[14px] text-gray-600 leading-relaxed">
                            <p>
                                Quisque varius diam vel metus mattis, id aliquam diam rhoncus. Proin vitae magna in dui finibus malesuada et at nulla. Morbi elit ex, viverra vitae ante vel, blandit feugiat ligula. Fusce fermentum iaculis nibh, at sodales leo maximus a. Nullam ultricies sodales nunc, in pellentesque lorem mattis quis. Cras imperdiet est in nunc tristique lacinia. Nullam aliquam mauris eu accumsan tincidunt. Suspendisse velit ex, aliquet vel ornare vel, dignissim a tortor.
                            </p>
                            <p>
                                Morbi ut sapien vitae odio accumsan gravida. Morbi vitae erat auctor, eleifend nunc a, lobortis neque. Praesent aliquam dignissim viverra. Maecenas lacus odio, feugiat eu nunc sit amet, maximus sagittis dolor. Vivamus nisi sapien, elementum sit amet eros sit amet, ultricies cursus ipsum. Sed consequat luctus ligula. Curabitur laoreet rhoncus blandit. Aenean vel diam ut arcu pharetra dignissim ut sed leo.
                            </p>
                        </div>
                    )}

                    {/* Additional Information */}
                    {activeTab === 1 && (
                        <table className="w-full text-[14px] text-gray-600 border border-gray-100">
                            <tbody>
                                <tr className="border border-gray-100">
                                    <td className="py-3 px-4 w-1/2 border-r border-gray-100">Brands</td>
                                    <td className="py-3 px-4">Welch's</td>
                                </tr>
                            </tbody>
                        </table>
                    )}

                    {/* Reviews */}
                    {activeTab === 2 && (
                        <div className="flex flex-col gap-6">

                            {/* Existing Review */}
                            <div>
                                <h3 className="text-[14px] font-bold uppercase text-gray-800 mb-4">
                                    1 Review for All Natural Italian-Style Chicken Meatballs
                                </h3>
                                <div className="flex items-start gap-4">
                                    <FaUserCircle size={50} className="text-gray-300 flex-shrink-0" />
                                    <div>
                                        <Rating value={4} size="small" readOnly />
                                        <p className="text-[13px] font-bold text-gray-800">
                                            admin <span className="text-gray-400 font-normal">– May 1, 2021</span>
                                        </p>
                                        <p className="text-[13px] text-gray-500 mt-1">
                                            Sed perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium.
                                        </p>
                                    </div>
                                </div>
                            </div>

                            <hr className="border-gray-100" />

                            {/* Add Review Form */}
                            <div>
                                <h3 className="text-[18px] font-bold text-gray-800 mb-4">Add a review</h3>
                                <hr className="border-gray-100 mb-4" />

                                <p className="text-[13px] text-gray-500 mb-4">
                                    Your email address will not be published. Required fields are marked *
                                </p>

                                {/* Rating Selector */}
                                <div className="mb-4">
                                    <label className="text-[13px] text-gray-700 font-medium mb-2 block">
                                        Your rating *
                                    </label>
                                    <div className="flex items-center gap-3">
                                        {[1, 2, 3, 4, 5].map((star) => (
                                            <div key={star} className="flex items-center">
                                                <Rating
                                                    value={star}
                                                    max={star}
                                                    onChange={() => setRating(star)}
                                                    size="small"
                                                    className={rating === star ? 'text-yellow-400' : ''}
                                                />
                                                {star < 5 && <span className="ml-3 text-gray-200">|</span>}
                                            </div>
                                        ))}
                                    </div>
                                </div>

                                {/* Review Textarea */}
                                <div className="mb-4">
                                    <label className="text-[13px] text-gray-700 font-medium mb-2 block">
                                        Your review *
                                    </label>
                                    <textarea
                                        rows={8}
                                        className="w-full bg-gray-100 border-0 rounded p-3 text-[13px] text-gray-600 outline-none resize-y"
                                    />
                                </div>

                                {/* Name */}
                                <div className="mb-4">
                                    <label className="text-[13px] text-gray-700 font-medium mb-2 block">
                                        Name *
                                    </label>
                                    <input
                                        type="text"
                                        className="w-full bg-gray-100 border-0 rounded p-3 text-[13px] outline-none"
                                    />
                                </div>

                                {/* Email */}
                                <div className="mb-4">
                                    <label className="text-[13px] text-gray-700 font-medium mb-2 block">
                                        Email *
                                    </label>
                                    <input
                                        type="email"
                                        className="w-full bg-gray-100 border-0 rounded p-3 text-[13px] outline-none"
                                    />
                                </div>

                                {/* Save Info Checkbox */}
                                <div className="flex items-center gap-2 mb-5">
                                    <input
                                        type="checkbox"
                                        id="saveInfo"
                                        checked={saveInfo}
                                        onChange={(e) => setSaveInfo(e.target.checked)}
                                        className="w-4 h-4"
                                    />
                                    <label htmlFor="saveInfo" className="text-[13px] text-gray-500">
                                        Save my name, email, and website in this browser for the next time I comment.
                                    </label>
                                </div>

                                {/* Submit */}
                                <button className="bg-[#1a2f6e] text-white px-6 py-2.5 rounded text-[13px] font-bold hover:bg-[#2bbef9] transition-all">
                                    Submit
                                </button>
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default ProductTabs;