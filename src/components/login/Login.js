import React, { useEffect, useState } from 'react'

import {
  Box,
  Button,
  Card,
  CardContent,
  CircularProgress,
  makeStyles
} from '@material-ui/core'
import Alert from '@material-ui/lab/Alert'
import { Field, Form, Formik } from 'formik'
import { TextField } from 'formik-material-ui'
import { Link, useHistory } from 'react-router-dom'
import * as Yup from 'yup'
import toast, { Toaster } from 'react-hot-toast'

import { useLogin } from '../../contexts/LoginContext'
import { useUser } from '../../contexts/UserContext'
import { postLogin } from '../../services/APIUtils'
import ColoredLinearProgress from '../elements/ColoredLinearProgress'

import './Login.css'
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

const LoginSchema = Yup.object().shape({
  email: Yup.string()
    .email('Enter a valid email')
    .required('Email is required'),
  password: Yup.string()
    .min(3, 'Password must contain at least 3 characters')
    .required('Enter your password')
})

const notify = () =>
  toast.success('You have Logged in successfully.', {
    duration: 4000
  })

const errorNotify = error => toast(`${error}`)

function Login () {
  const classes = useStyles()
  const history = useHistory()
  const [error, setError] = useState(false)
  const { setAuthentication } = useLogin()
  const { setUserId } = useUser()

  useEffect(() => {
    setAuthentication(false)
    localStorage.removeItem('homtoken')
  }, [setAuthentication])

  return (
    <>
      <div className='login-div'>
        <br />
        <br />
        <Toaster />
        <Card className={classes.root}>
          <Formik
            initialValues={{
              email: '',
              password: ''
            }}
            onSubmit={(values, { setSubmitting }) => {
              const sendPostRequest = async () => {
                setError(false)
                setSubmitting(true)
                try {
                  const resp = await postLogin(values)
                  if (resp.status === 200) {
                    notify()
                    history.push('/')
                    localStorage.setItem('token', resp.data.accessToken)
                    localStorage.setItem('userId', resp.data.data.id)
                    localStorage.setItem('memberId', resp.data.data.memberId)
                    localStorage.setItem('fname', resp.data.data.firstName)
                    setUserId(resp.data.id)
                    setAuthentication(true)
                  } else {
                    alert('Wrong credentials')
                  }
                  setSubmitting(false)
                } catch (err) {
                  errorNotify(err.response.data.message)
                  setError(true)
                  setSubmitting(false)
                }
              }
              sendPostRequest()
            }}
            validationSchema={LoginSchema}
          >
            {({ submitForm, isSubmitting }) => (
              <Form>
                <CardContent>
                  <header className='login-heading'>SIGN IN</header>
                  <Box margin={1}>
                    <Field
                      component={TextField}
                      name='email'
                      type='email'
                      label='Email'
                      margin='dense'
                      variant='outlined'
                    />
                  </Box>
                  <br />
                  <Box margin={1}>
                    <Field
                      component={TextField}
                      type='password'
                      label='Password'
                      name='password'
                      margin='dense'
                      variant='outlined'
                    />
                  </Box>
                  {isSubmitting && <ColoredLinearProgress />}
                  <br />
                  {error && (
                    <div className='error-div'>
                      <Alert
                        severity='error'
                        style={{ textAlign: 'center' }}
                      >{`Incorrect email or password!`}</Alert>
                    </div>
                  )}
                </CardContent>
                <Box margin={1}>
                  <Button
                    variant='contained'
                    color='primary'
                    className='login-form-button'
                    disabled={isSubmitting}
                    onClick={submitForm}
                    style={{ marginLeft: '30px' }}
                    startIcon={
                      isSubmitting ? <CircularProgress size='1rem' /> : null
                    }
                    size='small'
                  >
                    Submit
                  </Button>
                  <Link to='/passwordReset' style={{ textDecoration: 'none' }}>
                    <Button
                      style={{ marginLeft: '20px' }}
                      size='small'
                      color='primary'
                    >
                      Forgot Password?
                    </Button>
                  </Link>
                </Box>
                <Box margin={1}>
                  <h5>
                    Don't have an account yet?{' '}
                    <Link to='/signUp' style={{ textDecoration: 'none' }}>
                      Sign Up
                    </Link>
                  </h5>
                </Box>
              </Form>
            )}
          </Formik>
        </Card>
      </div>
    </>
  )
}
export default Login
