import { Button, makeStyles } from '@material-ui/core'
import toast, { Toaster } from 'react-hot-toast'
import React from 'react'
import { cancelSession } from '../../services/APIUtils.js'
import { useBookings } from '../../contexts/BookingContext'

const useStyles = makeStyles(theme => ({
  margin: {
    margin: theme.spacing(1)
  },
  root: {
    maxWidth: 500,
    marginLeft: 20
  },
  media: {
    height: 100
  },
  rootTwo: {
    justifyContent: 'center'
  }
}))

const notify = () => toast.success('The booking was cancelled successfully.')

const Booking = ({ booking }) => {
  const { setBookings} = useBookings()
  const classes = useStyles()
  const cancelFunction = async(bookingId) => {
  try {
    const res = await cancelSession({
      bookingId
    })
    setBookings(res?.data?.bookings)
    notify()
  } catch (e) {
    console.log(e)
  }
}

  return (
    <div>
     <Toaster />
      <h4>{booking.id}</h4>
      <h4>Member Id : {booking.memberId}</h4>
      <h4>Member Status : {booking.status}</h4>
      <Button
        variant='contained'
        color='primary'
        disableRipple
        className={classes.margin}
        style={{ cursor: 'pointer', borderRadius: '40px' }}
        onClick={() => cancelFunction(booking.id)}
      >
        Cancel Now
      </Button>
    </div>
  )
}

export default Booking
