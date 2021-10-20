import React from 'react'

const Booking = ({booking}) => {
  return (
    <div>
      <h4>{booking.id}</h4>
      <h4>Member Id : {booking.memberId}</h4>
      <h4>Member Status : {booking.status}</h4>
    </div>
  )
}

export default Booking
