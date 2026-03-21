import Home from "./pages/Home"
import Header from "./Component/Header"
import Footer from "./Component/Footer"
import { Routes, Route } from "react-router-dom";
import './index.css'
import ProductModal from './Component/ProductModal/index'
import { createContext, useEffect, useState } from "react";
import axios from "axios"
import Listing from './pages/Listing/index'
const Mycontext = createContext()
function App() {
  const [countryList, setCountryList] = useState([])
  const [selectCountry, setSelectCountry] = useState('')
  const [isOpenProductModel, setIsopenProductModel] = useState(false)
  useEffect(()=>{
    getCountry("https://countriesnow.space/api/v0.1/countries/")
  },[])
  const getCountry = async(url)=>{
    const resp = await axios.get(url).then((res)=>{
          setCountryList(res.data.data)
          console.log(res.data.data);
    })
  }
  const values = {
    countryList,
    setSelectCountry,
    selectCountry,
    isOpenProductModel,
    setIsopenProductModel
  }
  return (
    <>
    <Mycontext.Provider value={values}>
    <Header/>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/categorie/:id" element={<Listing/>}/>
        </Routes>
    <Footer/>
    {isOpenProductModel === true && <ProductModal/>}
        </Mycontext.Provider>
        </>
  )
}
export default App
export {Mycontext}
