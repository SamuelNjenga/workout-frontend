import React, { useEffect, useState } from 'react'

import { Nav, Navbar, NavDropdown } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import Button from '@material-ui/core/Button'
import TimelapseIcon from '@material-ui/icons/Timelapse'
import AccountCircleIcon from '@material-ui/icons/AccountCircle'
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder'

import { useLogin } from '../../contexts/LoginContext'

import './Navigation.css'

const Navigation = () => {
  const [scrollY, setScrollY] = useState(0)
  const [expanded, setExpanded] = useState(false)

  const fname = localStorage.getItem('fname')
  const { isAuthenticated } = useLogin()

  function logit () {
    setScrollY(window.pageYOffset)
  }

  useEffect(() => {
    function watchScroll () {
      window.addEventListener('scroll', logit)
    }
    watchScroll()
    // Remove listener (just like componentWillUnmount)
    return () => {
      window.removeEventListener('scroll', logit)
    }
  }, [])

  return (
    <div>
      <Navbar
        collapseOnSelect
        expand='lg'
        bg='dark'
        style={{
          padding: scrollY > 40 ? '10px 10px' : '20px 10px',
          transition: '0.4s'
        }}
        fixed='top'
        expanded={expanded}
      >
        <Navbar.Brand>
          <img
            src='https://img.icons8.com/external-konkapp-detailed-outline-konkapp/64/000000/external-gym-gym-konkapp-detailed-outline-konkapp.png'
            alt='My Gym'
          />
        </Navbar.Brand>
        <Navbar.Toggle
          onClick={() => setExpanded(expanded ? false : 'expanded')}
        />
        <Navbar.Collapse id='responsive-navbar-nav'>
          <Nav className='mr-auto'>
            <Nav.Link
              as={Link}
              to='/'
              className='nav-heading'
              onClick={() => setExpanded(false)}
            >
              Home
            </Nav.Link>
            <Nav.Link
              as={Link}
              to='/about'
              onClick={() => setExpanded(false)}
              className='nav-heading'
            >
              About
            </Nav.Link>
            <Nav.Link
              as={Link}
              to='/contact'
              onClick={() => setExpanded(false)}
              className='nav-heading'
            >
              Contact Us
            </Nav.Link>
            <NavDropdown
              title='Our Services'
              id='collasible-nav-dropdown'
              className='nav-heading'
            >
              <NavDropdown.Item
                as={Link}
                to={`/product-category/${'aerobics'}`}
                onClick={() => setExpanded(false)}
                className='nav-heading'
              >
                Aerobics
              </NavDropdown.Item>
              <NavDropdown.Item
                as={Link}
                to={`/service-category/${'weightLoss'}`}
                onClick={() => setExpanded(false)}
                className='nav-heading'
              >
                Weight Loss
              </NavDropdown.Item>
              <NavDropdown.Item
                as={Link}
                to={`/service-category/${'strengthTraining'}`}
                onClick={() => setExpanded(false)}
                className='nav-heading'
              >
                Strength Training
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item
                as={Link}
                to={`/sessions`}
                onClick={() => setExpanded(false)}
                className='nav-heading'
              >
                Others
              </NavDropdown.Item>
            </NavDropdown>
            {isAuthenticated && (
              <NavDropdown
                title={`Hi, ${fname}`}
                id='collasible-nav-dropdown'
                className='nav-heading'
              >
                <NavDropdown.Item
                  as={Link}
                  to={`/profile`}
                  onClick={() => setExpanded(false)}
                  className='nav-heading'
                >
                  <AccountCircleIcon />
                  My Account
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item
                  as={Link}
                  to={`/mySessions`}
                  onClick={() => setExpanded(false)}
                  className='nav-heading'
                >
                  <TimelapseIcon />
                  My Sessions
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item
                  as={Link}
                  to={`/myFavorites`}
                  onClick={() => setExpanded(false)}
                  className='nav-heading'
                >
                  <FavoriteBorderIcon />
                  My Favorites
                </NavDropdown.Item>
              </NavDropdown>
            )}
          </Nav>
          <Nav>
            {isAuthenticated ? (
              <div style={{ textAlign: 'center' }}>
                <Button
                  variant='contained'
                  color='primary'
                  size='small'
                  disableRipple
                  className='logout-btn'
                  style={{ borderRadius: '40px' }}
                  onClick={() => setExpanded(false)}
                >
                  <Nav.Link as={Link} to='/logout'>
                    Log Out
                  </Nav.Link>
                </Button>
              </div>
            ) : (
              <>
                <div style={{ textAlign: 'center' }}>
                  <Button
                    variant='contained'
                    color='primary'
                    size='small'
                    disableRipple
                    className='login-btn'
                    style={{ borderRadius: '40px' }}
                    onClick={() => setExpanded(false)}
                  >
                    <Nav.Link as={Link} to='/login' className='btn-link'>
                      Log in
                    </Nav.Link>
                  </Button>
                </div>
                <div style={{ textAlign: 'center' }}>
                  <Button
                    variant='outlined'
                    color='primary'
                    size='small'
                    disableRipple
                    className='signup-btn'
                    style={{ borderRadius: '40px' }}
                    onClick={() => setExpanded(false)}
                  >
                    <Nav.Link as={Link} to='/signup'>
                      Sign Up
                    </Nav.Link>
                  </Button>
                </div>
              </>
            )}
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </div>
  )
}

export default Navigation
