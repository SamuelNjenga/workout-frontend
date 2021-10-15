import React from 'react'

import './Main.css'
import TrainingSessionsList from './TrainingSessionsList'

const Main = () => {
  return (
    <div>
      <h3 className='main-heading'>Explore the available training sessions</h3>
      <TrainingSessionsList />
    </div>
  )
}

export default Main
