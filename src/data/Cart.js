// data/cart.js
export const getCart = () => {
  if (typeof window !== 'undefined') {
    const storedCart = localStorage.getItem('cart')
    return storedCart ? JSON.parse(storedCart) : []
  }
  return []
}

export const addToCart = (product) => {
  if (typeof window !== 'undefined') {
    const cart = getCart()
    cart.push(product)
    localStorage.setItem('cart', JSON.stringify(cart))
  }
}

export const removeFromCart = (productId) => {
  if (typeof window !== 'undefined') {
    let cart = getCart()
    cart = cart.filter((product) => product.id !== productId)
    localStorage.setItem('cart', JSON.stringify(cart))
  }
}
