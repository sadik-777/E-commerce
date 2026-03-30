import { createContext, useEffect, useState } from "react";
import { Routes, Route } from "react-router-dom";
import axios from "axios";

// Pages & Components
import Home from "./pages/Home";
import Header from "./Component/Header";
import Footer from "./Component/Footer";
import ProductDetails from './pages/ProductDetails/index';
import ProductModal from './Component/ProductModal/index';
import Cart from './pages/Cart/index';
import Listing from './pages/Listing/index';
import SignIn from "./pages/SignIn";

import './index.css';

const Mycontext = createContext();

function App() {
  const [countryList, setCountryList] = useState([]);
  const [selectCountry, setSelectCountry] = useState('');
  const [isOpenProductModel, setIsopenProductModel] = useState(false);
  
  // States الجديدة
  const [isHeaderFooterShow, setIsHeaderFooterShow] = useState(true);
  const [isLogin, setIsLogin] = useState(false);

  useEffect(() => {
    getCountry("https://countriesnow.space/api/v0.1/countries/");
  }, []);

  const getCountry = async (url) => {
    try {
      const res = await axios.get(url);
      setCountryList(res.data.data);
    } catch (error) {
      console.error("Error fetching countries:", error);
    }
  };

  const values = {
    countryList,
    setSelectCountry,
    selectCountry,
    isOpenProductModel,
    setIsopenProductModel,
    isHeaderFooterShow,
    setIsHeaderFooterShow,
    isLogin,
    setIsLogin
  };

  return (
    <Mycontext.Provider value={values}>
      {/* الـ Header كيبان غير يلا كانت الحالة true */}
      {isHeaderFooterShow === true && <Header />}

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/shop/:id" element={<Listing />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/signIn" element={<SignIn />} />
        <Route path="/product/:id" element={<ProductDetails />} />
      </Routes>

      {/* الـ Footer كيبان غير يلا كانت الحالة true */}
      {isHeaderFooterShow === true && <Footer />}

      {isOpenProductModel === true && <ProductModal />}
    </Mycontext.Provider>
  );
}

export default App;
export { Mycontext };