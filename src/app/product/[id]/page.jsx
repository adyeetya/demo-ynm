'use client'
import { products } from '../../../data/Products'
import Image from 'next/image'
import Link from 'next/link'
import { useCart } from '../../../context/cartContext'
import { toast } from 'react-hot-toast'
import { IoMdStar } from 'react-icons/io'
const ProductPage = ({ params }) => {
  const { addToCart } = useCart()
  const { id } = params
  const product = products.find((product) => product.id === parseInt(id))

  if (!product) {
    return <p>Product not found</p>
  }
  const handleAddToCart = () => {
    addToCart(product)
    
  }

  const similarProducts = products.filter((p) => p.id !== parseInt(id))

  return (
    <div className="p-4 md:py-12 max-w-screen-xl mx-auto min-h-screen">
      <div className="flex flex-col md:flex-row md:space-x-8">
        <div className="flex-shrink-0 flex">
          <Image
            src={product.imageUrl}
            alt={product.name}
            width={500}
            height={500}
            className="rounded-lg "
          />
        </div>
        <div className="mt-4 md:mt-0 flex flex-col justify-center gap-8">
          <div>
            <h1 className="text-3xl font-bold mb-1">{product.name}</h1>
            <p className="text-gray-900">{product.category}</p>
          </div>
          <p className="text-gray-600">{product.description}</p>
          <div className="flex justify-between gap-4 items-center">
            <p className="text-lg font-bold">${product.price.toFixed(2)}</p>
            <div className="text-gray-600 flex justify-center items-center gap-2">
              <p>{product.rating}</p>
              <IoMdStar className="w-4 h-4 md:w-5 md:h-5 text-[#debb02]" />
            </div>
          </div>
          <button
            onClick={handleAddToCart}
            className="w-fit mt-4 bg-black text-white px-6 py-2 rounded-full hover:bg-orange-600 transition-colors"
          >
            Add to Cart
          </button>
        </div>
      </div>

      <div className="mt-12">
        <h2 className="text-2xl font-bold mb-4">Similar Products</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {similarProducts.map((product) => (
            <Link
              key={product.id}
              href={`/product/${product.id}`}
              className="block border rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow"
            >
              <Image
                src={product.imageUrl}
                alt={product.name}
                width={300}
                height={300}
                className="w-full h-48 object-cover"
              />
              <div className="p-4">
                <h3 className="text-lg font-semibold">{product.name}</h3>
                <div className="flex justify-between gap-4 items-center mt-2">
                  <p className="text-md">${product.price.toFixed(2)}</p>
                  <div className="text-gray-600 flex justify-center items-center gap-2">
                    <p>{product.rating}</p>
                    <IoMdStar className="w-4 h-4 md:w-5 md:h-5 text-[#debb02]" />
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  )
}

export default ProductPage
