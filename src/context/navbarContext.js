'use client'
import React, { createContext, useState } from 'react'

export const GlobalStateContext = createContext()

export const GlobalStateProvider = ({ children }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <GlobalStateContext.Provider value={{ isMenuOpen, setIsMenuOpen }}>
      {children}
    </GlobalStateContext.Provider>
  )
}
