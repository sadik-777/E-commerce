import Button from '@mui/material/Button';
import { IoIosSearch } from "react-icons/io";

const SearchBox = ()=>{
return (
    <div className="flex items-center flex-1 bg-[#f3f4f7] rounded-[5px] px-4 h-16 border border-gray-100">
    <input 
        type="text" 
        placeholder="Search for products..."
        className="w-full bg-transparent outline-none text-[15px] text-[#2b2b2b] placeholder-[#838383]"
    />
    <Button className="min-w-fit! p-0!">
        <IoIosSearch className="text-[22px] text-[#2b2b2b] opacity-60" />
    </Button>
</div>
)
}
export default SearchBox;