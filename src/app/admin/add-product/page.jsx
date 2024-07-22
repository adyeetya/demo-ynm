'use client'

import { useState, useEffect } from 'react'
import axios from 'axios'
import { useRouter } from 'next/navigation'

const serverUrl = process.env.NEXT_PUBLIC_SERVER_URL

const Page = () => {
  const [formData, setFormData] = useState({
    name: '',
    category: '',
    description: '',
    rating: '',
    price: '',
    mrp: '',
    imageUrl: '',
    productImages: [],
    details: [],
    howToUse: [],
    productQualities: {
      text: '',
      points: [],
      imagesWithText: [],
    },
    properties: {
      ageRange: '',
      quantityPerBottle: '',
      price: '',
      lastsFor: '',
      properties: '',
    },
    otherInformation: {
      willDo: [],
      wontDo: [],
    },
    ratingPercentage: {
      fiveStars: '',
      fourStars: '',
      threeStars: '',
      twoStars: '',
      oneStar: '',
    },
  })
  const [productImageFiles, setProductImageFiles] = useState([])
  const [mainImageFile, setMainImageFile] = useState(null)
  const router = useRouter()



  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleProductImageFilesChange = (e) => {
    setProductImageFiles(e.target.files)
  }

  const handleMainImageFileChange = (e) => {
    setMainImageFile(e.target.files[0])
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    try {
      // Create form data
      const data = new FormData()
      data.append('name', formData.name)
      data.append('category', formData.category)
      data.append('description', formData.description)
      data.append('rating', formData.rating)
      data.append('price', formData.price)
      data.append('mrp', formData.mrp)
      data.append('imageUrl', formData.imageUrl)
      Array.from(productImageFiles).forEach((file) => {
        data.append('productImages', file)
      })
      if (mainImageFile) {
        data.append('mainImage', mainImageFile)
      }
      data.append('details', JSON.stringify(formData.details))
      data.append('howToUse', JSON.stringify(formData.howToUse))
      data.append('productQualities', JSON.stringify(formData.productQualities))
      data.append('properties', JSON.stringify(formData.properties))
      data.append('otherInformation', JSON.stringify(formData.otherInformation))
      data.append('ratingPercentage', JSON.stringify(formData.ratingPercentage))

      // Send request to backend
      const token = localStorage.getItem('adminToken')
      const res = await axios.post(`${serverUrl}/api/admin/addProduct`, data, {
        headers: {
          'Content-Type': 'multipart/form-data',
          Authorization: `Bearer ${token}`, // Include token in headers
        },
      })

      if (res.status === 200) {
        alert('Product added successfully')
      }
    } catch (error) {
      console.error('Error adding product', error)
      alert('Failed to add product')
    }
  }

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Add Product</h1>
      <form onSubmit={handleSubmit} encType="multipart/form-data">
        <div className="mb-4">
          <label className="block text-gray-700">Name</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className="w-full px-3 py-2 border rounded-lg"
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700">Category</label>
          <input
            type="text"
            name="category"
            value={formData.category}
            onChange={handleChange}
            className="w-full px-3 py-2 border rounded-lg"
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700">Description</label>
          <textarea
            name="description"
            value={formData.description}
            onChange={handleChange}
            className="w-full px-3 py-2 border rounded-lg"
            required
          ></textarea>
        </div>
        <div className="mb-4">
          <label className="block text-gray-700">Rating</label>
          <input
            type="number"
            step="0.1"
            name="rating"
            value={formData.rating}
            onChange={handleChange}
            className="w-full px-3 py-2 border rounded-lg"
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700">Price</label>
          <input
            type="number"
            name="price"
            value={formData.price}
            onChange={handleChange}
            className="w-full px-3 py-2 border rounded-lg"
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700">MRP</label>
          <input
            type="number"
            name="mrp"
            value={formData.mrp}
            onChange={handleChange}
            className="w-full px-3 py-2 border rounded-lg"
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700">Main Image</label>
          <input
            type="file"
            name="mainImage"
            onChange={handleMainImageFileChange}
            className="w-full px-3 py-2 border rounded-lg"
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700">Product Images</label>
          <input
            type="file"
            name="productImages"
            multiple
            onChange={handleProductImageFilesChange}
            className="w-full px-3 py-2 border rounded-lg"
          />
        </div>
        <button
          type="submit"
          className="bg-blue-500 text-white px-4 py-2 rounded-lg"
        >
          Add Product
        </button>
      </form>
    </div>
  )
}

export default Page
