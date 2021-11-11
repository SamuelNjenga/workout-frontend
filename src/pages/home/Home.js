import React from 'react'

import { Card } from 'react-bootstrap'
import TextOne from './TextOne'
import TextTwo from './TextTwo'

import './Home.css'
import Main from '../../components/trainingSession/Main'
import ImageSlider from './ImageSlider'
import Service from './Service'
import Footer from '../../components/footer/Footer'
import Pricing from '../../components/pricing/Pricing'

const Home = () => {
  return (
    <>
      <div>
        <ImageSlider />
      </div>
      <Main />
      <Service />
      <Pricing />
      <Footer />
    </>
  )
}

export default Home
