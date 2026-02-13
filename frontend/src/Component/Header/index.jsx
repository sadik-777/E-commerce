import { Link } from 'react-router-dom';
import logo from '../../assets/images/logo.png'
import CountryDropDown from '../countryDropDown';
const Header = ()=>{
    return(
        <>
        <header className="flex justify-center items-center ">
        <div className="w-full bg-blue-600">
        <p className="font-sans text-white text-center">Due to the <b>Covid 19</b>  epidemic, orders may e processed with a slight delay</p>
        </div>
        </header>
        <header className='flex flex-row'>
                <div className="container mx-auto flex align-middle gap-3 items-center mt-7">
                    <Link to="/" className="flex items-center">
                    <img className='w-32' src={logo} alt='logo'/>
                    </Link>
                    <div className="flex col-end-10 align-middle">
                    <CountryDropDown/>
                    {/* {Header search start here} */}
                        
                    {/* {Header search end here} */}
                    </div>
                </div>
                </header>
        </>
    )
}
export default Header