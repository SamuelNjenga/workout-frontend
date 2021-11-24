import { Snackbar } from '@material-ui/core'
import Button from '@material-ui/core/Button'
import Card from '@material-ui/core/Card'
import CardActionArea from '@material-ui/core/CardActionArea'
import CardActions from '@material-ui/core/CardActions'
import CardContent from '@material-ui/core/CardContent'
import { makeStyles, withStyles } from '@material-ui/core/styles'
import Chip from '@material-ui/core/Chip'
import Alert from '@material-ui/lab/Alert'
import { Image } from 'cloudinary-react'
import React, { useState } from 'react'
import toast, { Toaster } from 'react-hot-toast'
import { Link } from 'react-router-dom'
import moment from 'moment'
import { bookSession, checkSession } from '../../services/APIUtils'
import { useBookings } from '../../contexts/BookingContext'

import '../bookingSession/Booking.css'

export const BootstrapButton = withStyles({
  root: {
    boxShadow: 'none',
    textTransform: 'none',
    fontSize: 16,
    padding: '6px 12px',
    border: '1px solid',
    lineHeight: 1.5,
    backgroundColor: '#0063cc',
    borderColor: '#0063cc',
    fontFamily: [
      '-apple-system',
      'BlinkMacSystemFont',
      '"Segoe UI"',
      'Roboto',
      '"Helvetica Neue"',
      'Arial',
      'sans-serif',
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"'
    ].join(','),
    '&:hover': {
      backgroundColor: '#0069d9',
      borderColor: '#0062cc',
      boxShadow: 'none'
    },
    '&:active': {
      boxShadow: 'none',
      backgroundColor: '#0062cc',
      borderColor: '#005cbf'
    },
    '&:focus': {
      boxShadow: '0 0 0 0.2rem rgba(0,123,255,.5)'
    }
  }
})(Button)

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

const notify = () => toast.success('The booking was successful.')
const errorNotify = error => toast.error(`${error}`)

const TrainingSession = ({ session }) => {
  const { bookings, allBookings, setAllBookings, setBookings } = useBookings()

  const classes = useStyles()
  const [open, setOpen] = useState(false)
  const userId = localStorage.getItem('userId')
  const memberId = localStorage.getItem('memberId')

  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return
    }

    setOpen(false)
  }

  const bookFunction = async (userId, newSession, quantity) => {
    try {
      const res = await bookSession({
        userId: userId,
        newSession: newSession,
        quantity: quantity
      })
      setAllBookings(res.data.response)
      setBookings(res.data.response2.bookings)
      notify()
    } catch (err) {
      errorNotify(err.response.data.message)
      console.log('Err', err.response.data)
    }
  }

  // const checkFunction = async (id, memberId) => {
  //   try {
  //     const res = await checkSession({
  //       id: id,
  //       memberId: memberId
  //     })
  //     console.log('RES', res.data)
  //     return res.data
  //   } catch (e) {
  //     console.log(e)
  //   }
  // }

  const checkFunction = id => {
    if (allBookings && allBookings?.length) {
      console.log('HEYYY', allBookings)
      const item = allBookings.find(
        item => item.sessionId === id && item.status === 'BOOKED'
      )
      if (item) {
        console.log('HEY', item)
        return true
      } else return false
    }
  }

  return (
    <div>
      <Card className={classes.root}>
        <Toaster />
        <CardActionArea>
          <Image
            key={session.id}
            cloudName='greatbodyworkoutcloud'
            publicId={`${session.image}`}
            width='300'
            height='200'
            crop='scale'
          />
          <CardContent>
            <header className='general-data'>
              {' '}
              Session Id : <span className='actual-data'>{session.id}</span>
            </header>
            <header className='general-data'>
              {' '}
              Service Start Time :{' '}
              <span className='actual-data'>
                {moment(session.startTime).format('MMMM Do YYYY, h:mm:ss a')}
              </span>
            </header>
            <header className='general-data'>
              {' '}
              Service End Time :{' '}
              <span className='actual-data'>
                {moment(session.endTime).format('MMMM Do YYYY, h:mm:ss a')}
              </span>
            </header>
            <header className='general-data'>
              {' '}
              Service State :{' '}
              <span className='actual-data'>
                <Chip label={session.state} />
              </span>
            </header>
          </CardContent>
        </CardActionArea>
        <CardActions classes={{ root: classes.rootTwo }}>
          <Link to='/maincart' style={{ textDecoration: 'none' }}>
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
          </Link>
          {checkFunction(session.id) ? (
            <Button
              variant='contained'
              color='primary'
              disableRipple
              className={classes.margin}
              style={{ cursor: 'pointer', borderRadius: '40px' }}
              // onClick={() => bookFunction(userId, session, 1)}
              size='small'
              disabled={true}
            >
              ALREADY BOOKED
            </Button>
          ) : (
            <Button
              variant='contained'
              color='primary'
              disableRipple
              className={classes.margin}
              size='small'
              style={{ cursor: 'pointer', borderRadius: '40px' }}
              onClick={() => bookFunction(userId, session, 1)}
            >
              BOOK NOW
            </Button>
          )}
        </CardActions>
      </Card>
      <Snackbar
        anchorOrigin={{ vertical: 'top', horizontal: 'center' }}
        open={open}
        autoHideDuration={6000}
        onClose={handleClose}
      >
        <Alert onClose={handleClose} severity='success'>
          Session has been added to the cart
        </Alert>
      </Snackbar>
    </div>
  )
}

export default TrainingSession
