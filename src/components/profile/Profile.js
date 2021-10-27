import React, { useEffect, useState } from 'react'

import {
  Button,
  Card,
  CardActions,
  CardContent,
  CircularProgress,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  TextField
} from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'
import EditIcon from '@material-ui/icons/Edit'
import { Roller } from 'react-css-spinners'

import { getAccountDetails, updateUserData } from '../../services/APIUtils'

import './Profile.css'

const useStyles = makeStyles(theme => ({
  margin: {
    margin: theme.spacing(1)
  },
  root: {
    '& > *': {
      margin: theme.spacing(0)
    }
  }
}))

export default function Account () {
  const [item, setItem] = useState({})
  const [staticItem, setStaticItem] = useState({})
  const [loading, setLoading] = useState(true)
  const [open, setOpen] = useState(false)
  const [isSubmitting, setSubmitting] = useState(false)

  const userId = JSON.parse(localStorage.getItem('userId'))
  const token = localStorage.getItem('homtoken')

  useEffect(() => {
    getAccountDetails(userId, {
      headers: { 'x-access-token': `${token}` }
    })
      .then(res => {
        setItem(res?.data)
        setStaticItem(res?.data)
        setLoading(false)
      })
      .catch(e => {
        console.log(e)
      })
    return () => {
      setStaticItem({})
      setItem({})
    }
  }, [userId, token])

  const handleClickOpen = () => {
    setOpen(true)
  }

  const handleClose = () => {
    setOpen(false)
  }

  const handleChange = event => {
    event.persist()
    const target = event.target
    const value = target.value
    setItem({ ...item, [event.target.name]: value })
  }

  const handleSubmit = async event => {
    event.preventDefault()
    const item1 = { ...item }
    setSubmitting(true)
    try {
      await updateUserData(userId, item1, {
        headers: { 'x-access-token': `${token}` }
      })
      setSubmitting(false)
      setOpen(true)
      setStaticItem(item1)
      handleClose()
    } catch (err) {
      console.log(err)
      setSubmitting(false)
    }
  }

  const classes = useStyles()

  return (
    <>
      <div
        style={{ textAlign: 'left', paddingLeft: '30px', paddingRight: '30px' }}
      >
        <br />
        <br />
        <Card className={classes.root}>
          <CardContent>
            <h4 className='my-account-heading'>My Account Details</h4>
            <hr />
            {loading ? (
              <Roller color='rgb(0,128,0,0.9)' size={40} />
            ) : (
              <>
                <div>
                  <span className='detail-heading'>First Name </span>
                  <span className='detail-description'>
                    {staticItem?.firstName}
                  </span>
                </div>
                <div>
                  <span className='detail-heading'>Last Name </span>
                  <span className='detail-description'>
                    {staticItem?.lastName}
                  </span>
                </div>
                <div>
                  <span className='detail-heading'>PhoneNumber </span>
                  <span className='detail-description'>
                    {staticItem?.phoneNumber}
                  </span>
                </div>
                <div>
                  <span className='detail-heading'>Email </span>
                  <span className='detail-description'>
                    {staticItem?.email}
                  </span>
                </div>
              </>
            )}
          </CardContent>
          <CardActions>
            <Button
              color='primary'
              variant='contained'
              startIcon={<EditIcon />}
              onClick={handleClickOpen}
            >
              Edit
            </Button>
          </CardActions>
        </Card>
        <Dialog
          open={open}
          onClose={handleClose}
          aria-labelledby='form-dialog-title'
        >
          <form onSubmit={handleSubmit}>
            <DialogTitle id='form-dialog-title'>
              Update your details
            </DialogTitle>
            <DialogContent>
              <DialogContentText>Your personal data</DialogContentText>
              <TextField
                autoFocus
                margin='dense'
                name='firstName'
                label='First Name'
                type='text'
                value={item?.firstName}
                onChange={handleChange}
                fullWidth
              />
              <TextField
                autoFocus
                margin='dense'
                name='lastName'
                label='Last Name'
                type='text'
                value={item?.lastName}
                onChange={handleChange}
                fullWidth
              />
              <TextField
                autoFocus
                margin='dense'
                name='email'
                label='Email'
                type='email'
                disabled={true}
                value={item?.email}
                onChange={handleChange}
                fullWidth
              />
              <TextField
                autoFocus
                margin='dense'
                name='phoneNumber'
                label='Mobile phone number'
                type='text'
                value={item?.phoneNumber}
                onChange={handleChange}
                fullWidth
              />
            </DialogContent>
            <DialogActions>
              <Button onClick={handleClose} color='primary'>
                Cancel
              </Button>
              <Button
                color='primary'
                variant='contained'
                type='submit'
                disabled={isSubmitting}
                startIcon={
                  isSubmitting ? <CircularProgress size='1rem' /> : null
                }
              >
                Save
              </Button>
            </DialogActions>
          </form>
        </Dialog>
      </div>
    </>
  )
}
