import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import { useState } from 'react';
import RangeSlider from 'react-range-slider-input';
import 'react-range-slider-input/dist/style.css';
import { Link } from 'react-router-dom';
const Sidebar = () => {
    const [value, setValue] = useState([100, 60000])
    const [value2, setValue2] = useState(0)
    return (
        <>
        <div className="w-[20%] flex-[0_0_20%]">
            <div className="filterBox mb-5">
                <h6 className="font-bold text-[14px] mb-2">PRODUCT CATEGORIES</h6>
                <div className="pl-2.5 max-h-45 overflow-x-hidden overflow-y-scroll [&::-webkit-scrollbar]:w-1.25! [&::-webkit-scrollbar]:h-1.25!">
                    <ul className="p-0 m-0">
                        <li className='list-none mb-0 w-full'>
                            <FormControlLabel control={<Checkbox sx={{ padding: '2px' }} />} label="Beverages" sx={{ '& .MuiTypography-root': { fontSize: '13px' }, '& .MuiSvgIcon-root': { width: '20px', height: '20px' } }} />
                        </li>
                        <li className='list-none mb-0 w-full'>
                            <FormControlLabel control={<Checkbox sx={{ padding: '2px' }} />} label="Meats & Seafood" sx={{ '& .MuiTypography-root': { fontSize: '13px' }, '& .MuiSvgIcon-root': { width: '20px', height: '20px' } }} />
                        </li>
                        <li className='list-none mb-0 w-full'>
                            <FormControlLabel control={<Checkbox sx={{ padding: '2px' }} />} label="Breakfast & Dairy" sx={{ '& .MuiTypography-root': { fontSize: '13px' }, '& .MuiSvgIcon-root': { width: '20px', height: '20px' } }} />
                        </li>
                        <li className='list-none mb-0 w-full'>
                            <FormControlLabel control={<Checkbox sx={{ padding: '2px' }} />} label="Breads & Bakery" sx={{ '& .MuiTypography-root': { fontSize: '13px' }, '& .MuiSvgIcon-root': { width: '20px', height: '20px' } }} />
                        </li>
                        <li className='list-none mb-0 w-full'>
                            <FormControlLabel control={<Checkbox sx={{ padding: '2px' }} />} label="Frozen Foods" sx={{ '& .MuiTypography-root': { fontSize: '13px' }, '& .MuiSvgIcon-root': { width: '20px', height: '20px' } }} />
                        </li>
                        <li className='list-none mb-0 w-full'>
                            <FormControlLabel control={<Checkbox sx={{ padding: '2px' }} />} label="Biscuits & Snacks" sx={{ '& .MuiTypography-root': { fontSize: '13px' }, '& .MuiSvgIcon-root': { width: '20px', height: '20px' } }} />
                        </li>
                        <li className='list-none mb-0 w-full'>
                            <FormControlLabel control={<Checkbox sx={{ padding: '2px' }} />} label="Grocery & Staples" sx={{ '& .MuiTypography-root': { fontSize: '13px' }, '& .MuiSvgIcon-root': { width: '20px', height: '20px' } }} />
                        </li>
                        <li className='list-none mb-0 w-full'>
                            <FormControlLabel control={<Checkbox sx={{ padding: '2px' }} />} label="Grocery & Staples" sx={{ '& .MuiTypography-root': { fontSize: '13px' }, '& .MuiSvgIcon-root': { width: '20px', height: '20px' } }} />
                        </li>
                        <li className='list-none mb-0 w-full'>
                            <FormControlLabel control={<Checkbox sx={{ padding: '2px' }} />} label="Grocery & Staples" sx={{ '& .MuiTypography-root': { fontSize: '13px' }, '& .MuiSvgIcon-root': { width: '20px', height: '20px' } }} />
                        </li>
                        <li className='list-none mb-0 w-full'>
                            <FormControlLabel control={<Checkbox sx={{ padding: '2px' }} />} label="Grocery & Staples" sx={{ '& .MuiTypography-root': { fontSize: '13px' }, '& .MuiSvgIcon-root': { width: '20px', height: '20px' } }} />
                        </li>
                    </ul>
                </div>
            </div>
            <div className="filterBox mb-5">
                <h6 className='font-bold text-[14px] mb-4'>FILTER BY PRICE</h6>
                <RangeSlider className='h-1.25!' value={value} onInput={setValue} min={100} max={60000} step={5} />
            <div className='flex pt-2 pb-2'>
            <span>From: <strong className='text-black'>Rs: {value[0]}</strong></span>
            <span className='ml-auto'>From: <strong className='text-black'>Rs: {value[1]}</strong></span>
            </div>
            </div>
            <div className="filterBox mb-5">
                <h6 className="font-bold text-[14px] mb-2">PRODUCT CATEGORIES</h6>
                <div className="pl-2.5 max-h-45 overflow-x-hidden overflow-y-scroll [&::-webkit-scrollbar]:w-1.25! [&::-webkit-scrollbar]:h-1.25!">
                    <ul className="p-0 m-0">
                        <li className='list-none mb-0 w-full'>
                            <FormControlLabel control={<Checkbox sx={{ padding: '2px' }} />} label="In Stock" sx={{ '& .MuiTypography-root': { fontSize: '13px' }, '& .MuiSvgIcon-root': { width: '20px', height: '20px' } }} />
                        </li>
                        <li className='list-none mb-0 w-full'>
                            <FormControlLabel control={<Checkbox sx={{ padding: '2px' }} />} label="On Sale" sx={{ '& .MuiTypography-root': { fontSize: '13px' }, '& .MuiSvgIcon-root': { width: '20px', height: '20px' } }} />
                        </li>
                    </ul> 
                </div>
            </div>
            <div className="filterBox mb-5">
                <h6 className="font-bold text-[14px] mb-2">Brands</h6>
                <div className="pl-2.5 max-h-45 overflow-x-hidden overflow-y-scroll [&::-webkit-scrollbar]:w-1.25! [&::-webkit-scrollbar]:h-1.25!">
                    <ul className="p-0 m-0">
                        <li className='list-none mb-0 w-full'>
                            <FormControlLabel control={<Checkbox sx={{ padding: '2px' }} />} label="Frito Lay" sx={{ '& .MuiTypography-root': { fontSize: '13px' }, '& .MuiSvgIcon-root': { width: '20px', height: '20px' } }} />
                        </li>
                        <li className='list-none mb-0 w-full'>
                            <FormControlLabel control={<Checkbox sx={{ padding: '2px' }} />} label="Nespresso" sx={{ '& .MuiTypography-root': { fontSize: '13px' }, '& .MuiSvgIcon-root': { width: '20px', height: '20px' } }} />
                        </li>
                        <li className='list-none mb-0 w-full'>
                            <FormControlLabel control={<Checkbox sx={{ padding: '2px' }} />} label="Oreo" sx={{ '& .MuiTypography-root': { fontSize: '13px' }, '& .MuiSvgIcon-root': { width: '20px', height: '20px' } }} />
                        </li>
                        <li className='list-none mb-0 w-full'>
                            <FormControlLabel control={<Checkbox sx={{ padding: '2px' }} />} label="Quaker" sx={{ '& .MuiTypography-root': { fontSize: '13px' }, '& .MuiSvgIcon-root': { width: '20px', height: '20px' } }} />
                        </li>
                        <li className='list-none mb-0 w-full'>
                            <FormControlLabel control={<Checkbox sx={{ padding: '2px' }} />} label="Welch’s" sx={{ '& .MuiTypography-root': { fontSize: '13px' }, '& .MuiSvgIcon-root': { width: '20px', height: '20px' } }} />
                        </li>
                    </ul> 
                </div>
            </div>
            <br />
            <Link to='#'><img src="https://klbtheme.com/bacola/wp-content/uploads/2021/05/sidebar-banner.gif" alt="" /></Link>
        </div>
        
        </>
    );
};

export default Sidebar;