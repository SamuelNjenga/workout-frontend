import { Snackbar } from '@material-ui/core'
import Button from '@material-ui/core/Button'
import Card from '@material-ui/core/Card'
import CardActionArea from '@material-ui/core/CardActionArea'
import CardActions from '@material-ui/core/CardActions'
import CardContent from '@material-ui/core/CardContent'
import { makeStyles, withStyles } from '@material-ui/core/styles'
import Alert from '@material-ui/lab/Alert'
import { Image } from 'cloudinary-react'
import React, { useState } from 'react'
import toast, { Toaster } from 'react-hot-toast'
import { Link } from 'react-router-dom'
import moment from 'moment'
import { bookSession } from '../../services/APIUtils'
// import { useCart } from '../../contexts/CartContext'
// import { useOrder } from '../../contexts/OrderContext'

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

const TrainingSession = ({ session }) => {
  const classes = useStyles()
  // const { cart } = useCart()
  // const { addToCart } = useOrder()
  const [open, setOpen] = useState(false)
  const userId = localStorage.getItem('userId')

  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return
    }

    setOpen(false)
  }

  const bookFunction = (userId, newSession, quantity) => {
    try {
      bookSession({
        userId: userId,
        newSession: newSession,
        quantity: quantity
      })
      notify()
    } catch (e) {
      console.log(e)
    }
  }

  return (
    <div>
      <Card className={classes.root}>
        <Toaster />
        <CardActionArea>
          <CardContent>
            <header className='product-price'>
              {' '}
              Service Id : {session.id}
            </header>
            <header className='product-price'>
              {' '}
              Service Start Time :{' '}
              {moment(session.startTime).format('MMMM Do YYYY, h:mm:ss a')}
            </header>
            <header className='product-price'>
              {' '}
              Service End Time :{' '}
              {moment(session.endTime).format('MMMM Do YYYY, h:mm:ss a')}
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
              style={{ cursor: 'pointer', borderRadius: '40px' }}
            >
              View More
            </Button>
          </Link>
          <Button
            variant='contained'
            color='primary'
            disableRipple
            className={classes.margin}
            style={{ cursor: 'pointer', borderRadius: '40px' }}
            onClick={() => bookFunction(userId, session, 1)}
          >
            Book Now
          </Button>
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
