import { useState } from 'react';
import Button from '@mui/material/Button';
import { FaMinus } from "react-icons/fa";
import { FaPlus } from "react-icons/fa6";
const QuantityBox = ()=>{
    const [count, setCount] = useState(1);
return(
    <div className="flex items-center w-37.5 gap-2.5 mt-4">
    <Button onClick={() => setCount(count > 1? count - 1: 1)} className="min-w-10! w-10! h-10! rounded-full! bg-[#edeef5]! border! border-black/10! text-black!">
<FaMinus className="text-black!"/>
</Button>
<input type="text" value={count} readOnly className="w-10 border-0 bg-transparent outline-none text-center font-bold"/>
<Button onClick={() => setCount(count + 1)} className="min-w-10! w-10! h-10! rounded-full! bg-[#edeef5]! border! border-black/10! text-black!">
<FaPlus className="text-black!"/>
</Button>
</div>
)
}
export default QuantityBox