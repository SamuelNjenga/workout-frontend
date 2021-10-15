import React, { createContext, useState, useContext, useEffect } from 'react'
import { getSessions } from '../services/APIUtils'
export const TrainingSessionContext = createContext()
export function useSessions () {
  return useContext(TrainingSessionContext)
}
export const TrainingSessionProvider = props => {
  const [sessions, setSessions] = useState([])
  const [count, setCount] = useState(null)
  const [page, setPage] = useState(0)
  const [isLoading, setLoading] = useState(true)

  const fetchSessions = async () => {
    const res = await getSessions(page)
    const data = res?.data?.trainingSessions
    const curr = res?.data?.currentPage
    const num = res?.data?.totalPages
    setCount(num)
    setPage(curr)
    setSessions(data)
    setLoading(false)
  }
  useEffect(() => {
    fetchSessions()
  }, [page])

  return (
    <TrainingSessionContext.Provider
      value={{
        sessions,
        setSessions,
        count,
        page,
        setCount,
        setPage,
        isLoading,
        setLoading
      }}
    >
      {props.children}
    </TrainingSessionContext.Provider>
  )
}
