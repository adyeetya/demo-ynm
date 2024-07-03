// app/products/page.js
'use client'
import Link from 'next/link'
import Image from 'next/image'
import { products } from '../../data/Products'
import { useCart } from '../../context/cartContext'
import { toast } from 'react-hot-toast'
import { IoMdStar } from 'react-icons/io'
const ProductsPage = () => {
  const { addToCart } = useCart()
  const handleAddToCart = (product) => {
    console.log(product)
    addToCart(product)
    
  }

  return (
    <div className="p-4 md:py-6 max-w-screen-xl mx-auto min-h-screen">
      <h1 className="text-3xl font-bold mb-6">All Products</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {products.map((product) => (
          <div
            key={product.id}
            className="block border rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow p-4"
          >
            <Link href={`/product/${product.id}`} passHref>
              <Image
                src={product.imageUrl}
                alt={product.name}
                width={300}
                height={300}
                className="w-full h-48 object-cover"
              />
            </Link>
            <div className="p-4">
              <Link href={`/product/${product.id}`} passHref>
                <div>
                  <h1 className="text-lg font-bold mb-1">{product.name}</h1>
                  <p className="text-gray-900 text-sm">{product.category}</p>
                </div>
              </Link>
              <p className="text-gray-600 mt-2">{product.description}</p>
              <div className="flex justify-between items-center">
                <p className="mt-2 text-lg font-bold">
                  ${product.price.toFixed(2)}
                </p>
                <div className="text-gray-600 flex justify-center items-center gap-2">
                  <p>{product.rating}</p>
                  <IoMdStar className="w-4 h-4 md:w-5 md:h-5 text-[#debb02]" />
                </div>
              </div>
              <button
                onClick={() => handleAddToCart(product)}
                className="w-fit mt-4 bg-black text-white px-6 py-2 rounded-full hover:bg-orange-600 transition-colors"
              >
                Add to Cart
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default ProductsPage
