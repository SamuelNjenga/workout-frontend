import React, { createContext, useState, useContext } from 'react'

export const UserContext = createContext()

export function useUser () {
  return useContext(UserContext)
}

export const UserProvider = props => {
  const [userId, setUserId] = useState(null)

  return (
    <UserContext.Provider
      value={{
        userId,
        setUserId
      }}
    >
      {props.children}
    </UserContext.Provider>
  )
}
