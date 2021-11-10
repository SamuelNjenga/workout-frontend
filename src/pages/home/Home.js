import React from 'react'

import { Card } from 'react-bootstrap'
import TextOne from './TextOne'
import TextTwo from './TextTwo'

import './Home.css'
import Main from '../../components/trainingSession/Main'
import ImageSlider from './ImageSlider'
import Service from './Service'
import Footer from '../../components/footer/Footer'

const Home = () => {
  return (
    <>
      <div>
        <ImageSlider />
      </div>
      <Main />
      <Service />
      <Footer/>
    </>
  )
}

export default Home
