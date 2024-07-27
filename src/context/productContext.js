'use client'
import React, { createContext, useContext, useState, useEffect } from 'react'
const serverUrl = process.env.NEXT_PUBLIC_SERVER_URL
const ProductContext = createContext()

export const useProducts = () => useContext(ProductContext)

export const ProductProvider = ({ children }) => {
  const [products, setProducts] = useState([])
  const [isLoading, setIsLoading] = useState(true)
  const [isError, setIsError] = useState(false)

  useEffect(() => {
    const fetchProducts = async () => {
      setIsLoading(true)
      setIsError(false)
      try {
        const response = await fetch(`${serverUrl}/api/products/`)

        const data = await response.json()
        // console.log('data', data)
        setProducts(data)
      } catch (error) {
        setIsError(true)
      }
      setIsLoading(false)
    }

    fetchProducts()
  }, [])

  return (
    <ProductContext.Provider value={{ products, isLoading, isError }}>
      {children}
    </ProductContext.Provider>
  )
}
