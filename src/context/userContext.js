'use client'
import React, { createContext, useContext, useState, useEffect } from 'react'

// Create a UserContext with default value
const UserContext = createContext(null)

// Create a custom hook to use the UserContext
export const useUser = () => useContext(UserContext)

export const UserProvider = ({ children }) => {
  const [user, setUser] = useState(null)

  // Function to log in the user
  const login = (userData) => {
    setUser(userData)
    localStorage.setItem('user', JSON.stringify(userData)) // Persist user data in localStorage
  }

  // Function to log out the user
  const logout = () => {
    setUser(null)
    localStorage.removeItem('user') // Remove user data from localStorage
  }
  const updateUser = async (updatedUser) => {
    setUser((prevUser) => ({
      ...prevUser,
      ...updatedUser,
    }))
    localStorage.setItem('user', JSON.stringify(user))
  }
  // Load user data from localStorage on initial render
  useEffect(() => {
    const storedUser = localStorage.getItem('user')
    if (storedUser) {
      setUser(JSON.parse(storedUser))
    }
  }, [])

  return (
    <UserContext.Provider value={{ user, login, logout, updateUser }}>
      {children}
    </UserContext.Provider>
  )
}
