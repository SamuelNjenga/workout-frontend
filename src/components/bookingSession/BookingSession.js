import React from 'react'

import './Main.css'
import BookingSessionsList from './BookingSessionsList'

const BookingSession = () => {
  return (
    <div>
    <br />
    <br />
      <h3 className='main-heading'>
        Your training sessions booking status are as follows
      </h3>
      <BookingSessionsList />
    </div>
  )
}

export default BookingSession
