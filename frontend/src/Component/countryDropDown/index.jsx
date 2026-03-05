import { FaAngleDown } from "react-icons/fa";
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import { IoIosSearch } from "react-icons/io";
import { MdClose } from "react-icons/md";
import React,{ useContext, useEffect, useState } from "react";
import Slide from '@mui/material/Slide';
import { Mycontext } from "../../App";

const Transition = React.forwardRef(function Transition(props, ref) {
    return <Slide direction="up" ref={ref} {...props} />;
  });
const CountryDropDown = () => {
    const context = useContext(Mycontext)
    const [isopenModel, setIsopenModel] = useState(false)
    const [countryList, setcountryList] = useState([])
    const [selectedTab, setselectedTab] = useState(null)
    const selectCountry = (index, country)=>{
        setselectedTab(index)
        alert(selectedTab)
        setIsopenModel(false)
        context.setSelectCountry(country)
    }
    useEffect(()=>{
        setcountryList(context.countryList)
    },[])
    const filterList = (e) => {
        const keyword = e.target.value.toLowerCase()
        if(keyword !== ""){
            const list = countryList?.filter(item=>item.country.toLowerCase().includes(keyword))
            setcountryList(list)
        }else{
            setcountryList(context.countryList)
        }
    }
    return(
        <>
    <Button onClick={()=>setIsopenModel(true)}  sx={{border: "0.5px solid gray"}} variant="outlined" className="h-14">
    <div className='flex flex-col'>
    <span className="text-xs capitalize text-black leading-[1.8] pr-2.5 pt-2.5 ">Your Location</span>
    <span className="text-xs capitalize text-blue-600 font-bold leading-[1.8] pr-2.5">{context.selectCountry !==''? 
    context.selectCountry.length > 10 ? context.selectCountry?.substr(0,10)+'....': context.selectCountry : 'select Location'}</span>
    </div>
    <span className="ml-auto"><FaAngleDown/></span>
    </Button>
    <Dialog  slots={{
        transition: Transition,}} className="relative" onClose={()=>setIsopenModel(false)}  open={isopenModel} slotProps={{
        paper: {
            sx: {
                padding: '25px', 
                borderRadius: '15px',
                // width: '100%',
                // maxWidth: '450px',
                // boxShadow: '0px 5px 15px rgba(0,0,0,0.1)' 
                        }
        }
    }}>
        <h4 className="text-2xl">Choose your Delivery Location</h4>
        <p>Enter your address and we will specify the offer for your area.</p>
        <Button onClick={()=>setIsopenModel(false)} className="absolute! right-0! top-0! py-5! cursor-pointer! h-10! rounded-[50%]! text-black! text-2xl! bg-transparent! hover:bg-transparent! active:bg-transparent! focus:bg-transparent! border-none! outline-none!">
<MdClose/>
</Button>
        <div className="flex items-center bg-[#f3f4f7] rounded-[5px] px-4 h-16 border my-4 border-gray-100">
            <IoIosSearch className="text-[22px] text-[#2b2b2b] opacity-60" />
    <input 
        type="text" 
        placeholder="Search your area..."
        onChange={filterList}
        className="w-full bg-transparent outline-none text-[15px] text-[#2b2b2b] placeholder-[#838383]"
    />
    <Button className="min-w-fit! p-0!">
    </Button>
</div>
            <ul className="mb-0 tk overflow-y-scroll overflow-x-hidden max-h-100">
                {
                    countryList?.length !== 0 && countryList?.map((item, i)=>(

                        <li key={i}><Button onClick={()=>selectCountry(i,item.country)}
                        className={` ${selectedTab===i ? 'active': ''}`}
                        >{item.country}</Button></li>
                    ))
                }
                
            </ul>
    </Dialog>
        </>
    )
}
export default CountryDropDown