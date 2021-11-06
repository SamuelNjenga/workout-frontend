import React from 'react'
import { Carousel } from 'react-bootstrap'

const ImageSlider = () => {
  return (
    <div className = 'main-div'>
      <Carousel fade>
        <Carousel.Item>
          <img
            className='d-block w-100'
            src='https://res.cloudinary.com/greatbodyworkoutcloud/image/upload/v1634135696/gym-app/yoga_a.jpg'
            alt='First slide'
            height='600px'
          />
          <Carousel.Caption>
            <h3>First slide label</h3>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className='d-block w-100'
            src='https://res.cloudinary.com/greatbodyworkoutcloud/image/upload/v1634135527/gym-app/weight_c.jpg'
            alt='Second slide'
            height = '600px'
          />

          <Carousel.Caption>
            <h3>Second slide label</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className='d-block w-100'
            src='https://res.cloudinary.com/greatbodyworkoutcloud/image/upload/v1634136070/gym-app/call_b.jpg'
            alt='Third slide'
            height = '600px'
          />

          <Carousel.Caption>
            <h3>Third slide label</h3>
            <p>
              Praesent commodo cursus magna, vel scelerisque nisl consectetur.
            </p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
  )
}

export default ImageSlider
