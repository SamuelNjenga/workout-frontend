import { Button, makeStyles } from '@material-ui/core'
import Card from '@material-ui/core/Card'
import CardActionArea from '@material-ui/core/CardActionArea'
import CardActions from '@material-ui/core/CardActions'
import CardContent from '@material-ui/core/CardContent'
import Chip from '@material-ui/core/Chip'

import moment from 'moment'
import toast, { Toaster } from 'react-hot-toast'
import React from 'react'

import { bookSession } from '../../services/APIUtils'
import { useBookings } from '../../contexts/BookingContext'

import './Booking.css'

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
const errorNotify = error => toast.error(`${error}`)

const Booking = ({ booking }) => {
  const userId = localStorage.getItem('userId')
  const {
    allBookings,
    setAllBookings,
    setBookings,
    cancelFunction,
    page,
    bookAgainFunction
  } = useBookings()
  const classes = useStyles()

  const checkFunction = id => {
    if (allBookings && allBookings?.length) {
      console.log('HEYYY', allBookings)
      const item = allBookings.find(
        item => item.sessionId === id && item.status === 'CANCELLED'
      )
      if (item) {
        console.log('HEY', item)
        return true
      } else return false
    }
  }

  // const bookFunction = async (userId, newSession, quantity) => {
  //   try {
  //     const res = await bookSession({
  //       userId: userId,
  //       newSession: newSession,
  //       quantity: quantity
  //     })
  //     setAllBookings(res.data.response)
  //     setBookings(res.data.response2.bookings)
  //     notify()
  //   } catch (err) {
  //     errorNotify(err.response.data.message)
  //     console.log('Err', err.response.data)
  //   }
  // }

  return (
    <div>
      <Card className={classes.root}>
        <Toaster />
        <CardActionArea>
          <CardContent>
            <header className='general-data'>
              {' '}
              Service Name :{' '}
              <span className='actual-data'>
                {booking.TrainingSession.ServiceType.name}
              </span>
            </header>
            <header className='general-data'>
              {' '}
              Service Start Time :{' '}
              <span className='actual-data'>
                {moment(booking.TrainingSession.startTime).format(
                  'MMMM Do YYYY, h:mm:ss a'
                )}
              </span>
            </header>
            <header className='general-data'>
              {' '}
              Service End Time :{' '}
              <span className='actual-data'>
                {moment(booking.TrainingSession.endTime).format(
                  'MMMM Do YYYY, h:mm:ss a'
                )}
              </span>
            </header>
            <header className='general-data'>
              {' '}
              Service Current State :{' '}
              <span className='actual-data'>
                <Chip label={booking.TrainingSession.state} />
              </span>
            </header>
            <header className='general-data'>
              Service Id :{' '}
              <span className='actual-data'>{booking.TrainingSession.id}</span>
            </header>
            <header className='general-data'>
              Member Status :{' '}
              <span className='actual-data'>
                <Chip label={booking.status} />
              </span>
            </header>
          </CardContent>
        </CardActionArea>
        <CardActions classes={{ root: classes.rootTwo }}>
          <Button
            variant='contained'
            color='primary'
            disableRipple
            className={classes.margin}
            size='small'
            style={{ cursor: 'pointer', borderRadius: '40px' }}
          >
            View More
          </Button>
          {checkFunction(booking.TrainingSession.id) ? (
            <Button
              variant='contained'
              color='primary'
              disableRipple
              className={classes.margin}
              size='small'
              style={{ cursor: 'pointer', borderRadius: '40px' }}
              onClick={() => bookAgainFunction(booking.id, page)}
            >
              BOOK NOW
            </Button>
          ) : (
            <Button
              variant='contained'
              color='primary'
              disableRipple
              className={classes.margin}
              style={{ cursor: 'pointer', borderRadius: '40px' }}
              size='small'
              onClick={() => {
                notify()
                cancelFunction(booking.id, page)
              }}
            >
              Cancel Now
            </Button>
          )}
        </CardActions>
      </Card>
    </div>
  )
}

export default Booking
