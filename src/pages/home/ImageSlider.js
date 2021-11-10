import React from 'react'
import { Carousel } from 'react-bootstrap'

const ImageSlider = () => {
  return (
    <div className='main-div'>
      <Carousel fade>
        <Carousel.Item>
          <img
            className='d-block w-100'
            src='https://res.cloudinary.com/greatbodyworkoutcloud/image/upload/v1634135696/gym-app/yoga_a.jpg'
            alt='First slide'
            height='600px'
          />
          <Carousel.Caption>
            <h3>Build perfect body shape</h3>
            <p>For good and healthy life</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className='d-block w-100'
            src='https://res.cloudinary.com/greatbodyworkoutcloud/image/upload/v1634135527/gym-app/weight_c.jpg'
            alt='Second slide'
            height='600px'
          />

          <Carousel.Caption>
            <h3>Be Strong</h3>
            <p>Training Hard</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className='d-block w-100'
            src='https://res.cloudinary.com/greatbodyworkoutcloud/image/upload/v1634136070/gym-app/call_b.jpg'
            alt='Third slide'
            height='600px'
          />

          <Carousel.Caption>
            <h3>We care for your health</h3>
            <p>Every moment</p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
  )
}

export default ImageSlider
