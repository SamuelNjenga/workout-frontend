import React, { useState } from 'react'

import { Formik, Form, Field } from 'formik'
import {
  Button,
  Box,
  CircularProgress,
  makeStyles,
  Card
} from '@material-ui/core'
import { TextField } from 'formik-material-ui'
import * as Yup from 'yup'
import { useHistory } from 'react-router-dom'
import Alert from '@material-ui/lab/Alert'
import toast, { Toaster } from 'react-hot-toast'

import { postUserRegistration } from '../../services/APIUtils'
import ColoredLinearProgress from '../elements/ColoredLinearProgress'

import './Signup.css'

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

const SignupSchema = Yup.object().shape({
  firstName: Yup.string().required('Enter your FirstName'),
  lastName: Yup.string().required('Enter your LastName'),
  phoneNumber: Yup.string().required('Enter your PhoneNumber'),
  gender: Yup.string().required('Enter your Gender'),
  email: Yup.string()
    .email('Enter a valid email')
    .required('Email is required'),
  password: Yup.string()
    .min(3, 'Password must contain at least 3 characters')
    .required('Enter your password')
})

const notify = () =>
  toast.success('Signed up successfully. You can now login after paying membership fee.', {
    duration: 4000
  })

function Signup () {
  const classes = useStyles()
  const [error, setError] = useState(false)
  const history = useHistory()

  return (
    <>
      <div className='signup-div'>
        <br />
        <br />
        <Toaster />
        <Card className={classes.root}>
          <Formik
            initialValues={{
              firstName: '',
              lastName: '',
              phoneNumber: '',
              email: '',
              password: '',
              gender: ''
            }}
            onSubmit={(values, { setSubmitting }) => {
              const sendPostRequest = async () => {
                setError(false)
                setSubmitting(true)
                try {
                  const resp = await postUserRegistration(values)
                  if (resp.status === 201) {
                    notify()
                    history.push('/login')
                  }
                  setSubmitting(false)
                } catch (err) {
                  console.error(err)
                  setError(true)
                  setSubmitting(false)
                }
              }
              sendPostRequest()
            }}
            validationSchema={SignupSchema}
          >
            {({ submitForm, isSubmitting }) => (
              <Form>
                <header className='register-heading'>CREATE ACCOUNT</header>
                <Box margin={2}>
                  <Field
                    component={TextField}
                    type='firstName'
                    label='FirstName'
                    name='firstName'
                    margin='dense'
                    variant='outlined'
                  />
                </Box>
                <Box margin={2}>
                  <Field
                    component={TextField}
                    type='lastName'
                    label='LastName'
                    name='lastName'
                    margin='dense'
                    variant='outlined'
                  />
                </Box>
                <Box margin={2}>
                  <Field
                    component={TextField}
                    name='email'
                    type='email'
                    label='Email'
                    margin='dense'
                    variant='outlined'
                  />
                </Box>
                <Box margin={2}>
                  <Field
                    component={TextField}
                    type='password'
                    label='Password'
                    name='password'
                    margin='dense'
                    variant='outlined'
                  />
                </Box>
                <Box margin={2}>
                  <Field
                    component={TextField}
                    type='phoneNumber'
                    label='Phonenumber'
                    name='phoneNumber'
                    margin='dense'
                    variant='outlined'
                  />
                </Box>
                <Box margin={2}>
                  <Field
                    component={TextField}
                    type='gender'
                    label='Gender'
                    name='gender'
                    margin='dense'
                    variant='outlined'
                  />
                </Box>

                {error && (
                  <div className='error-div'>
                    <Alert
                      severity='error'
                      style={{ textAlign: 'center' }}
                    >{`Enter a valid email`}</Alert>
                  </div>
                )}
                {isSubmitting && <ColoredLinearProgress />}
                <br />
                <Box margin={1}>
                  <Button
                    variant='contained'
                    color='primary'
                    className='login-form-button'
                    disabled={isSubmitting}
                    onClick={submitForm}
                    startIcon={
                      isSubmitting ? <CircularProgress size='1rem' /> : null
                    }
                  >
                    Register
                  </Button>
                </Box>
              </Form>
            )}
          </Formik>
        </Card>
      </div>
    </>
  )
}
export default Signup
