import { FaAngleDown } from "react-icons/fa";
import Button from '@mui/material/Button';

const CountryDropDown = () => {
    return(
        <>
    <Button  sx={{border: "1px solid black"}} variant="outlined" className="h-14">
    <div className='flex flex-col'>
    <span className="text-xs capitalize text-black leading-[1.8] pr-2.5 pt-2.5 ">Your Location</span>
    <span className="text-xs capitalize text-blue-600 font-bold leading-[1.8] pr-2.5">India</span>
    </div>
    <span className="ml-auto"><FaAngleDown/></span>
    </Button>
        </>
    )
}
export default CountryDropDown