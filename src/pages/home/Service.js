import React from 'react'

import './Service.css'

const Service = () => {
  return (
    <div>
      <section className='page-section' id='services'>
        <div className='container'>
          <div className='text-center'>
            <h2 className='section-heading text-uppercase'>Our Services</h2>
            <h3 className='section-subheading text-muted'>
              Visit us today and enjoy our services.
            </h3>
          </div>
          <div className='row text-center'>
            <div className='col-md-4'>
              <span className='fa-stack fa-4x'>
                <i className='fas fa-circle fa-stack-2x text-primary'></i>
                <i className='fas fa-calendar-day fa-stack-1x fa-inverse'></i>
              </span>
              <h4 className='my-3'>Aerobics Classes</h4>
              <p className='text-muted'>
                Are meant to make you move, sweat and get a little out of breath. Whether you want to focus more on muscular endurance, flexibility or simply improve your cardio-vascular endurance, we have many different classes for you to choose from.
              </p>
            </div>
            <div className='col-md-4'>
              <span className='fa-stack fa-4x'>
                <i className='fas fa-circle fa-stack-2x text-primary'></i>
                <i className='fas fa-laptop fa-stack-1x fa-inverse'></i>
              </span>
              <h4 className='my-3'>Yoga Classes</h4>
              <p className='text-muted'>
                Come and learn a great way to strengthen the bond between your mind and your body. Learn a great way to appreciate your body and its abilities. Come and let us help you to focus on your breathing,stretching and developing mindfulness.
              </p>
            </div>
            <div className='col-md-4'>
              <span className='fa-stack fa-4x'>
                <i className='fas fa-circle fa-stack-2x text-primary'></i>
                <i className='fas fa-lock fa-stack-1x fa-inverse'></i>
              </span>
              <h4 className='my-3'>Zumba Classes</h4>
              <p className='text-muted'>
                Come and enjoy a dance based workout which includes samba, salsa and more. The instructors create a lively environment with great music and great people allowing you to burn calories without even realizing you are working out.
              </p> 
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Service
