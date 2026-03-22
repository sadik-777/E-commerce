import Sidebar from "../../Component/Sidebar";
import Button from '@mui/material/Button';
import { LuMenu } from "react-icons/lu";
import { CgMenuGridO } from "react-icons/cg";
import { HiSquares2X2 } from "react-icons/hi2";
import { TfiLayoutGrid4Alt } from "react-icons/tfi";
import { FaAngleDown } from "react-icons/fa6";
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import { useState } from "react";
import ProductItem from '../../Component/ProductItem/index'
import Pagination from '@mui/material/Pagination';
const Listing = () => {
    const [anchorEl, setAnchorEl] = useState(null);
    const [productView, setProductView] = useState('four');
    const openDropDown = Boolean(anchorEl);
    const handleClick = (event) => {
      setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
      setAnchorEl(null);
    };
    return (
        <>
            <section className="py-10">
                <div className="container mx-auto px-4">
                <div className="flex gap-5">
            <Sidebar className="w-[20%] flex-[0_0_20%]" />
        <div className="w-[80%] flex-[0_0_80%] pl-12.5">
            <img style={{borderRadius:'8px'}} className="w-full" src="https://klbtheme.com/bacola/wp-content/uploads/2021/08/bacola-banner-18.jpg" alt="" />
            <div className="w-full bg-[#f7f8fd] mt-5 mb-5 flex items-center py-4 px-6 h-auto">
                <div className="flex ">
                    <Button onClick={()=>setProductView('one')} className={`min-w-8! h-8! w-8! rounded-[50%]!` + productView === 'one' && 'act'}><LuMenu className="text-[20px]! text-black! opacity-[0.3] hover:opacity-100"/></Button>
                    <Button onClick={()=>setProductView('two')} className={`min-w-8! h-8! w-8! rounded-[50%]!` + productView === 'two' && 'act'}><CgMenuGridO className="text-[20px]! text-black! opacity-[0.3] hover:opacity-100"/></Button>
                    <Button onClick={()=>setProductView('three')} className={`min-w-8! h-8! w-8! rounded-[50%]!` + productView === 'three' && 'act'}><HiSquares2X2 className="text-[20px]! text-black! opacity-[0.3] hover:opacity-100"/></Button>
                    <Button onClick={()=>setProductView('four')} className={`min-w-8! h-8! w-8! rounded-[50%]!` + productView === 'four' && 'act'}><TfiLayoutGrid4Alt className="text-[20px]! text-black! opacity-[0.3] hover:opacity-100"/></Button>
                </div>
                <div className="ml-auto">
                    <Button onClick={handleClick} className="min-w-auto! text-black!">Show<FaAngleDown className="opacity-[0.6] ml-1"/></Button>
                    <Menu 
                    className="w-full MenuDrop"
                    id="basic-menu"
                    anchorEl={anchorEl}
                    open={openDropDown}
                    onClose={handleClose}
                    slotProps={{
                    list: {
                        'aria-labelledby': 'basic-button',
                    },
                    }}
                >
                    <MenuItem onClick={handleClose}>12</MenuItem>
                    <MenuItem onClick={handleClose}>24</MenuItem>
                    <MenuItem onClick={handleClose}>36</MenuItem>
                    <MenuItem onClick={handleClose}>48</MenuItem>
                </Menu>
                </div>
            </div>
            <div className="flex gap-5 flex-wrap">
                <ProductItem itemView={productView}/>
                <ProductItem itemView={productView}/>
                <ProductItem itemView={productView}/>
                <ProductItem itemView={productView}/>
                <ProductItem itemView={productView}/>
                <ProductItem itemView={productView}/>
                <ProductItem itemView={productView}/>
                <ProductItem itemView={productView}/>
                <ProductItem itemView={productView}/>
                <ProductItem itemView={productView}/>
                <ProductItem itemView={productView}/>
                <ProductItem itemView={productView}/>
                <ProductItem itemView={productView}/>
                <ProductItem itemView={productView}/>
                <ProductItem itemView={productView}/>
                <ProductItem itemView={productView}/>
                <ProductItem itemView={productView}/>
                <ProductItem itemView={productView}/>
            </div>
            <div className="flex items-center justify-center mt-8">
                <Pagination count={10} color="primary"size="large" />
                </div>
        </div>
            </div>
                </div>
            </section>

        </>
    )
}

export default Listing;