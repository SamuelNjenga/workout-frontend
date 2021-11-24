import React, { createContext, useState, useContext, useEffect } from 'react'

import {
  cancelSession,
  getAllBookingDetails,
  getBookingDetails,
  bookAgainSession
} from '../services/APIUtils'

export const BookingContext = createContext()

export function useBookings () {
  return useContext(BookingContext)
}

export const BookingProvider = props => {
  // const key = 'Page'
  const [bookings, setBookings] = useState([])
  const [allBookings, setAllBookings] = useState([])
  const [count, setCount] = useState(null)
  // const [page, setPage] = useState(() => {
  //   const persistedValue = localStorage.getItem(key)
  //   return persistedValue !== 'null' ? JSON.parse(persistedValue) : 0
  // })
  const [page, setPage] = useState(0)
  const [isLoading, setLoading] = useState(true)
  const memberId = localStorage.getItem('memberId')

  const cancelFunction = async (bookingId, page) => {
    try {
      const res = await cancelSession({
        bookingId,
        page
      })
      setAllBookings(res.data.response3)
      setBookings(res.data.response2.bookings)
      //setBookings(res?.data?.bookings)
      // setAllBookings(res.data.response)
    } catch (e) {
      console.log(e)
    }
  }

  const bookAgainFunction = async (bookingId, page) => {
    try {
      const res = await bookAgainSession({
        bookingId,
        page
      })
      setAllBookings(res.data.response3)
      setBookings(res.data.response2.bookings)
    } catch (e) {
      console.log(e)
    }
  }

  const fetchSessions = async () => {
    const res = await getBookingDetails(memberId, page)
    const data = res?.data?.bookings
    const curr = res?.data?.currentPage
    const num = res?.data?.totalPages
    setCount(num)
    setPage(curr)
    setBookings(data)
    setLoading(false)
  }
  useEffect(() => {
    fetchSessions()
  }, [page])

  const fetchAllSessions = async () => {
    const res = await getAllBookingDetails(memberId)
    const data = res?.data
    setAllBookings(data)
    setLoading(false)
  }
  useEffect(() => {
    fetchAllSessions()
  }, [])

  return (
    <BookingContext.Provider
      value={{
        bookings,
        setBookings,
        count,
        page,
        setCount,
        allBookings,
        setAllBookings,
        setPage,
        isLoading,
        setLoading,
        cancelFunction,
        bookAgainFunction
      }}
    >
      {props.children}
    </BookingContext.Provider>
  )
}
