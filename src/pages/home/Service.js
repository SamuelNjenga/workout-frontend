import React from 'react'

import './Service.css'

const Service = () => {
  return (
    <div>
      <section className='page-section' id='services'>
        <div className='container'>
          <div className='text-center'>
            <h2 className='section-heading text-uppercase'>Services</h2>
            <h3 className='section-subheading text-muted'>
              Lorem ipsum dolor sit amet consectetur.
            </h3>
          </div>
          <div className='row text-center'>
            <div className='col-md-4'>
              <span className='fa-stack fa-4x'>
                <i className='fas fa-circle fa-stack-2x text-primary'></i>
                <i className='fas fa-calendar-day fa-stack-1x fa-inverse'></i>
              </span>
              <h4 className='my-3'>Service A</h4>
              <p className='text-muted'>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima
                maxime quam architecto quo inventore harum ex magni, dicta
                impedit.
              </p>
            </div>
            <div className='col-md-4'>
              <span className='fa-stack fa-4x'>
                <i className='fas fa-circle fa-stack-2x text-primary'></i>
                <i className='fas fa-laptop fa-stack-1x fa-inverse'></i>
              </span>
              <h4 className='my-3'>Service B</h4>
              <p className='text-muted'>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima
                maxime quam architecto quo inventore harum ex magni, dicta
                impedit.
              </p>
            </div>
            <div className='col-md-4'>
              <span className='fa-stack fa-4x'>
                <i className='fas fa-circle fa-stack-2x text-primary'></i>
                <i className='fas fa-lock fa-stack-1x fa-inverse'></i>
              </span>
              <h4 className='my-3'>Service C</h4>
              <p className='text-muted'>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima
                maxime quam architecto quo inventore harum ex magni, dicta
                impedit.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Service
