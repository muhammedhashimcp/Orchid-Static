import React from 'react'
import Amenities from '../Amenities/Amenities'
import Gallery from '../Gallery/Gallery'
import Location from '../Location/Location'
import MasterPlan from '../MasterPlan/MasterPlan'
import Overview from '../OverView/Overview'
import Price from '../Price/Price'
import About from './About'
import Form from './Form'
import Spec from './Spec'

const HomePage = () => {
  return (
    <div>
        <Form/>
        <Overview/>
        <MasterPlan/>
        <Location/>
        <Price/>
        <Amenities/>
        <Gallery/>
        <Spec/>
        <About/>
    </div>
  )
}

export default HomePage