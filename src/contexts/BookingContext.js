import React, { createContext, useState, useContext, useEffect } from 'react'
import { cancelSession, getBookingDetails } from '../services/APIUtils'
export const BookingContext = createContext()
export function useBookings () {
  return useContext(BookingContext)
}
export const BookingProvider = props => {
  const key = 'Page'
  const [bookings, setBookings] = useState([])
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
      setBookings(res?.data?.bookings)
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

  return (
    <BookingContext.Provider
      value={{
        bookings,
        setBookings,
        count,
        page,
        setCount,
        setPage,
        isLoading,
        setLoading,
        cancelFunction
      }}
    >
      {props.children}
    </BookingContext.Provider>
  )
}
