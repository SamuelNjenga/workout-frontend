import { Grid } from '@material-ui/core'
import { Pagination } from '@material-ui/lab'
import React from 'react'
import LoopCircleLoading from 'react-loadingg/lib/LoopCircleLoading'
import { useBookings } from '../../contexts/BookingContext'
import Booking from './Booking'

import './Main.css'

const BookingSessionsList = () => {
  const { bookings, isLoading, count, page, setPage } = useBookings()

  const handleChange = (event, value) => {
    setPage(value - 1)
  }

  //   useEffect(() => {
  //   window.scrollTo(0, 100)
  // }, [handleChange])

  return (
    <>
      <div className='equipment-container'>
        <div className='content-container'>
          {isLoading ? (
            <LoopCircleLoading />
          ) : (
            <Grid container spacing={2} style={{ padding: 24 }}>
              {bookings.map(booking => (
                <Grid key={booking.id} item xs={12} sm={6} lg={3} xl={4}>
                  <Booking booking={booking} />
                </Grid>
              ))}
            </Grid>
          )}
        </div>
        <div style={{ margin: 'auto', width: '60%' }}>
          <Pagination
            count={count}
            page={page}
            color='primary'
            variant='outlined'
            shape='rounded'
            onChange={handleChange}
          />
        </div>
        <hr />
      </div>
    </>
  )
}

export default BookingSessionsList
