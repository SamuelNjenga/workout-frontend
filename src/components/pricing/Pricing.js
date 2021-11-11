import React from 'react'
import { Link } from 'react-router-dom'

import './Pricing.css'

const Pricing = () => {
  return (
    <section id='pricing' className='pricing'>
      <div className='container' data-aos='fade-up'>
        <header className='section-header'>
          <h2>Pricing</h2>
          <p>Check our Pricing</p>
        </header>

        <div className='row gy-4' data-aos='fade-left'>
          <div
            className='col-lg-3 col-md-6'
            data-aos='zoom-in'
            data-aos-delay='100'
          >
            <div className='box'>
              <h3 style={{ color: '#07d5c0' }}>1 Month Plan</h3>
              <div className='price'>
                <sup>KSH</sup>5000<span> / mo</span>
              </div>
              <img src='assets/pricing-free.png' className='img-fluid' alt='' />
              <ul>
                <li>Aida dere</li>
              </ul>
              <Link
                to='#'
                className='btn-buy'
                style={{ textDecoration: 'none' }}
              >
                Buy Now
              </Link>
            </div>
          </div>

          <div
            className='col-lg-3 col-md-6'
            data-aos='zoom-in'
            data-aos-delay='200'
          >
            <div className='box'>
              <span className='featured'>Featured</span>
              <h3 style={{ color: '#65c600' }}>1/4 Year Plan</h3>
              <div className='price'>
                <sup>KSH</sup>14500<span> / mo</span>
              </div>
              <img
                src='assets/pricing-starter.png'
                className='img-fluid'
                alt=''
              />
              <ul>
                <li>Aida dere</li>
              </ul>
              <Link
                to='#'
                className='btn-buy'
                style={{ textDecoration: 'none' }}
              >
                Buy Now
              </Link>
            </div>
          </div>

          <div
            className='col-lg-3 col-md-6'
            data-aos='zoom-in'
            data-aos-delay='300'
          >
            <div className='box'>
              <h3 style={{ color: '#ff901c' }}>Half Year Plan</h3>
              <div className='price'>
                <sup>KSH</sup>19000<span> / mo</span>
              </div>
              <img
                src='assets/pricing-business.png'
                className='img-fluid'
                alt=''
              />
              <ul>
                <li>Aida dere</li>
              </ul>
              <Link
                to='#'
                className='btn-buy'
                style={{ textDecoration: 'none' }}
              >
                Buy Now
              </Link>
            </div>
          </div>

          <div
            className='col-lg-3 col-md-6'
            data-aos='zoom-in'
            data-aos-delay='400'
          >
            <div className='box'>
              <h3 style={{ color: '#ff0071' }}>Yearly Plan</h3>
              <div className='price'>
                <sup>KSH</sup>55000<span> / mo</span>
              </div>
              <img
                src='assets/pricing-ultimate.png'
                className='img-fluid'
                alt=''
              />
              <ul>
                <li>Aida dere</li>
              </ul>
              <Link
                to='#'
                className='btn-buy'
                style={{ textDecoration: 'none' }}
              >
                Buy Now
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Pricing
