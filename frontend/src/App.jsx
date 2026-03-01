import Home from "./pages/Home"
import Header from "./Component/Header"
import { Routes, Route } from "react-router-dom";
import './index.css'
import { createContext, useEffect, useState } from "react";
import axios from "axios"
const Mycontext = createContext()
function App() {
  const [countryList, setCountryList] = useState([])
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
    countryList
  }
  return (
    <>
    <Mycontext.Provider value={values}>
    <Header/>
        <Routes>
          <Route path="/" element={<Home/>}/>
        </Routes>
        </Mycontext.Provider>
        </>
  )
}
export default App
export {Mycontext}
