import React from 'react'

import Copyright from './Copyright'

import './Footer.css'

const Footer = () => {
  return (
    <div>
      <footer class='footer text-center'>
        <div class='container'>
          <div class='row'>
            {/* Footer Location */}
            <div class='col-lg-4 mb-5 mb-lg-0'>
              <h4 class='text-uppercase mb-4'>Our Location</h4>
              <p class='lead mb-0'>
              Along Ronald Ngala Street
                <br />
                Nairobi County
              </p>
            </div>
            {/* Footer Social Icons */}
            <div class='col-lg-4 mb-5 mb-lg-0'>
              <h4 class='text-uppercase mb-4'>Connect with us</h4>
              <a class='btn btn-outline-light btn-social mx-1' href='#!'>
                <i class='fab fa-fw fa-facebook-f'></i>
              </a>
              <a class='btn btn-outline-light btn-social mx-1' href='#!'>
                <i class='fab fa-fw fa-twitter'></i>
              </a>
              <a class='btn btn-outline-light btn-social mx-1' href='#!'>
                <i class='fab fa-fw fa-linkedin-in'></i>
              </a>
              <a class='btn btn-outline-light btn-social mx-1' href='#!'>
                <i class='fab fa-fw fa-dribbble'></i>
              </a>
            </div>
            <div class='col-lg-4'>
              <h4 class='text-uppercase mb-4'>About Great Body Ltd</h4>
              <p class='lead mb-0'>
                Great Body Ltd is a free to use, MIT licensed, created
                by Sam Njenga.
              </p>
            </div>
          </div>
        </div>
      </footer>
      <Copyright />
    </div>
  )
}

export default Footer
