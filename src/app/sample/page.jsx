'use client'
import React, { useState, useEffect } from 'react'
import { useCart } from '../../context/cartContext'
const Page = () => {
  const { cart } = useCart()
  const [items, setItems] = useState([])

  useEffect(() => {
    setItems(cart)
  }, [cart])

  console.log('items from sample: ', items[0])
  console.log('cart from sample: ', cart)
  return <div>{items[0]?.productId?.name}</div>
}

export default Page
