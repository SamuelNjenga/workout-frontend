import React from 'react'

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

import Navigation from './components/header/Navigation'
import Login from './components/login/Login'
import Home from './pages/home/Home.js'
import Logout from './components/logout/Logout'
import Signup from './components/signup/Signup'
import Profile from './components/profile/Profile'
import BookingSession from './components/bookingSession/BookingSession.js'

import './App.css'
import { TrainingSessionProvider } from './contexts/TrainingSessionContext'
import { BookingProvider } from './contexts/BookingContext'
import { UserProvider } from './contexts/UserContext'
import { LoginProvider } from './contexts/LoginContext'
import CategoryList from './components/serviceCategory/CategoryList'

const App = () => {
  return (
    <div className='content-container'>
      <TrainingSessionProvider>
        <LoginProvider>
          <UserProvider>
            <BookingProvider>
              <Router>
                <Navigation />
                <Switch>
                  <Route path='/' exact={true} component={Home} />
                  <Route path='/login' exact={true} component={Login} />
                  <Route path='/logout' exact={true} component={Logout} />
                  <Route path='/signup' exact={true} component={Signup} />
                  <Route path='/profile' exact={true} component={Profile} />
                  <Route
                    path='/mySessions'
                    exact={true}
                    component={BookingSession}
                  />
                  <Route path='/service-category/:name' exact={true} component={CategoryList} />
                </Switch>
              </Router>
            </BookingProvider>
          </UserProvider>
        </LoginProvider>
      </TrainingSessionProvider>
    </div>
  )
}

export default App
