import React from 'react'

import { Card } from 'react-bootstrap'
import TextOne from './TextOne'
import TextTwo from './TextTwo'

import './Home.css'
import Main from '../../components/trainingSession/Main'

const Home = () => {
  return (
    <>
      <div className='main-div'>
        <div style={{ backgroundColor: 'gray' }} className='sub-main-div'>
          <div className='text-one'>
            <TextOne />
          </div>
        </div>
        <div className='sub-main-div'>
          <Card style={{ backgroundColor: 'gray' }}>
            <Card.Img
              className='main-image'
              src={window.location.origin + '/assets/foot.jpg'}
            />
            <Card.ImgOverlay>
              <div className='text-two'>
                <TextTwo />
              </div>
            </Card.ImgOverlay>
          </Card>
        </div>
      </div>
      <Main />
    </>
  )
}

export default Home
