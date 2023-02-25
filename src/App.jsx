import {BrowserRouter as Router, Routes,Route  } from "react-router-dom";
import Footer from "./Components/Navigation/Footer";
// import './App.css'
import Navbar from "./Components/Navigation/Navbar";
import Amenities from "./Components/Pages/Amenities/Amenities";
import Brochure from "./Components/Pages/Brochure/Brochure";
import Contactus from "./Components/Pages/Contact/ContactUs";
import Disclaimer from "./Components/Pages/Disclimer/Disclimer";
import Faqs from "./Components/Pages/FAQs/Faqs";
import Gallery from "./Components/Pages/Gallery/Gallery";
import HomePage from "./Components/Pages/Home/HomePage";
import Location from "./Components/Pages/Location/Location";
import FloorPlan from "./Components/Pages/MasterPlan/FloorPlan";
import MasterPlan from "./Components/Pages/MasterPlan/MasterPlan";
import Overview from "./Components/Pages/OverView/Overview";
import Price from "./Components/Pages/Price/Price";

function App() {

  return (
    <Router>
      <Navbar/>
        <Routes>
          <Route path='/' element={<HomePage/>}/>
          <Route path='/overview' element={<Overview/>}/>
          <Route path='/master-plan' element={<MasterPlan/>}/>
          <Route path='/location' element={<Location/>}/>
          <Route path='/price' element={<Price/>}/>
          <Route path='/amenities' element={<Amenities/>}/>
          <Route path='/gallery' element={<Gallery/>}/>
          <Route path='/contact-us' element={<Contactus/>}/>
          <Route path='/brochure' element={<Brochure/>}/>
          <Route path='/disclimer' element={<Disclaimer/>}/>
          <Route path='/floor-plan' element={<FloorPlan/>}/>
        </Routes>
      <Faqs/>
      <Footer/>
    </Router>
  )
}

export default App
