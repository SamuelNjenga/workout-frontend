import { Button, makeStyles } from '@material-ui/core'
import Card from '@material-ui/core/Card'
import CardActionArea from '@material-ui/core/CardActionArea'
import CardActions from '@material-ui/core/CardActions'
import CardContent from '@material-ui/core/CardContent'
import Chip from '@material-ui/core/Chip'

import toast, { Toaster } from 'react-hot-toast'
import React from 'react'
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
  const { cancelFunction, page } = useBookings()
  const classes = useStyles()

  return (
    <div>
      <Card className={classes.root}>
        <Toaster />
        <CardActionArea>
          <CardContent>
            <header className='product-price'>
              {' '}
              Service Id : {booking.id}
            </header>
            <header className='product-price'>
              Member Id : {booking.memberId}
            </header>
            <header className='product-price'>Session Id : {booking.sessionId}</header>
            <header className='product-price'>
              Member Status : <Chip label={booking.status} />
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
        </CardActions>
      </Card>
    </div>
  )
}

export default Booking
