import React from 'react'

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

import Navigation from './components/header/Navigation'
import Login from './components/login/Login'
import Home from './pages/home/Home.js'
import Logout from './components/logout/Logout'
import Signup from './components/signup/Signup'

import './App.css'
import { TrainingSessionProvider } from './contexts/TrainingSessionContext'
import { UserProvider } from './contexts/UserContext'
import { LoginProvider } from './contexts/LoginContext'

const App = () => {
  return (
    <div className='content-container'>
      <TrainingSessionProvider>
        <LoginProvider>
          <UserProvider>
            <Router>
              <Navigation />
              <Switch>
                <Route path='/' exact={true} component={Home} />
                <Route path='/login' exact={true} component={Login} />
                <Route path='/logout' exact={true} component={Logout} />
                <Route path='/signup' exact={true} component={Signup} />
              </Switch>
            </Router>
          </UserProvider>
        </LoginProvider>
      </TrainingSessionProvider>
    </div>
  )
}

export default App
