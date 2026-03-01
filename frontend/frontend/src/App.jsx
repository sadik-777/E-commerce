import Home from "./pages/Home"
import Header from "./Component/Header"
import { Routes, Route } from "react-router-dom";
import './index.css'
function App() {
  return (
    <>
    <Header/>
        <Routes>
          <Route path="/" element={<Home/>}/>
        </Routes>
        </>
  )
}

export default App
