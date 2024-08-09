'use client'
import React, { createContext, useContext, useState, useEffect } from 'react'
import axios from 'axios'
import Cookies from 'js-cookie'
const serverUrl = process.env.NEXT_PUBLIC_SERVER_URL
const isProduction = process.env.NODE_ENV !== 'development'

// Create a UserContext with default value
const UserContext = createContext(null)

// Create a custom hook to use the UserContext
export const useUser = () => useContext(UserContext)

export const UserProvider = ({ children }) => {
  const [user, setUser] = useState(null)
  const [loading, setLoading] = useState(true)

  // this fetch user runs everytime the application loads to check if we have a previous user logged in
  const fetchUser = async () => {
    // const token = localStorage.getItem('ynmtoken')
    const token = Cookies.get('ynmtoken')
    if (!token) {
      setLoading(false)
      return
    }

    // console.log('Fetching user from context with token')
    try {
      const response = await axios.get(`${serverUrl}/api/users/getUser`, {
        headers: { Authorization: `Bearer ${token}` },
      })

      // console.log('Response from getUser:', response)
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
    Cookies.set('ynmtoken', token, {
      expires: 7, // Token will expire in 7 days
      secure: isProduction, // Use secure cookies in production
      sameSite: isProduction ? 'None' : 'Lax', // Cross-site cookie settings
      domain: isProduction ? '.yesnmore.com' : undefined, // Set domain for production
    })
  }

  // Function to log out the user
  const logout = () => {
    setUser(null)
    // localStorage.removeItem('ynmtoken') // Remove user data from localStorage
    Cookies.remove('ynmtoken')
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
    <UserContext.Provider
      value={{ user, login, logout, updateUser, loading, setUser }}
    >
      {children}
    </UserContext.Provider>
  )
}
