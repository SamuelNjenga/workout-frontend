import React, { createContext, useState, useContext, useEffect } from 'react'
import { getBookingDetails } from '../services/APIUtils'
export const BookingContext = createContext()
export function useBookings () {
  return useContext(BookingContext)
}
export const BookingProvider = props => {
  const [bookings, setBookings] = useState([])
  const [count, setCount] = useState(null)
  const [page, setPage] = useState(0)
  const [isLoading, setLoading] = useState(true)
  const memberId = localStorage.getItem('memberId')

  const fetchSessions = async () => {
    const res = await getBookingDetails(memberId)
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
        setLoading
      }}
    >
      {props.children}
    </BookingContext.Provider>
  )
}
