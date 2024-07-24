'use client'
import React, { createContext, useContext, useState, useEffect } from 'react'
import axios from 'axios'
const serverUrl = process.env.NEXT_PUBLIC_SERVER_URL
// Create a UserContext with default value
const UserContext = createContext(null)

// Create a custom hook to use the UserContext
export const useUser = () => useContext(UserContext)

export const UserProvider = ({ children }) => {
  const [user, setUser] = useState(null)
  const [loading, setLoading] = useState(true)

  // this fetch user runs everytime the application loads to check if we have a previous user logged in
const fetchUser = async () => {
  const token = localStorage.getItem('ynmtoken')
  if (!token) {
    setLoading(false)
    return
  }

  console.log('Fetching user from context with token')
  try {
    const response = await axios.get(`${serverUrl}/api/users/getUser`, {
      headers: { Authorization: `Bearer ${token}` },
    })

    console.log('Response from getUser:', response)
    if (response.status === 200) {
      setUser(response.data.user)
    }
  } catch (error) {
    console.error('Failed to fetch user data', error)
  } finally {
    setLoading(false)
  }
}

useEffect(() => {
  fetchUser()
}, [])

  const login = (userData, token) => {
    // console.log('login userdata', userData)
    setUser(userData)
    localStorage.setItem('ynmtoken', token) // Persist user data in localStorage
  }

  // Function to log out the user
  const logout = () => {
    setUser(null)
    localStorage.removeItem('ynmtoken') // Remove user data from localStorage
  }
  const updateUser = async (updatedUser) => {
    setUser((prevUser) => ({
      ...prevUser,
      ...updatedUser,
    }))
    // localStorage.setItem('user', JSON.stringify(user))
  }
  // Load user data from localStorage on initial render

  return (
    <UserContext.Provider value={{ user, login, logout, updateUser, loading }}>
      {children}
    </UserContext.Provider>
  )
}
