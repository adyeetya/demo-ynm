'use client'

import { useState, useEffect } from 'react'
import { useUser } from '../../context/userContext'
import { useRouter } from 'next/navigation'
import axios from 'axios'
import Link from 'next/link'
import { toast } from 'react-hot-toast'
const AccountPage = () => {
  const { user, updateUser, logout } = useUser()
  const [isEditing, setIsEditing] = useState(null)
  const router = useRouter()
  const [formData, setFormData] = useState({
    _id: '',
    name: '',
    email: '',
    address: '',
  })

  if (!user) router.push('/login')

  useEffect(() => {
    setFormData({
      _id: user?._id || '',
      name: user?.name || '',
      email: user?.email || '',
      address: user?.address || '',
    })
  }, [user])

  const handleEdit = (field) => {
    setIsEditing(field)
  }

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  const handleFieldSave = () => {
    updateUser({ ...user, ...formData })
    setIsEditing(null)
  }

  const handleSave = async () => {
    try {
      // Retrieve the token from local storage
      const token = localStorage.getItem('ynmtoken')

      // Make a PUT request to update user information
      const response = await axios.put(
        `${process.env.NEXT_PUBLIC_SERVER_URL}/api/users/update/${user._id}`,
        formData,
        {
          headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${token}`, // Include the token in the Authorization header
          },
        }
      )

      if (response.status !== 200) {
        toast.error('Failed to update user information')
        throw new Error('Failed to update user information')
      }

      const { data } = response
      updateUser(data.user) // Update the user data in context
      toast.success('User information updated successfully')
    } catch (error) {
      console.error('Error updating user information:', error.message)
      toast.error('Error updating user information')
    }
  }

  const handleLogout = async () => {
    try {
      logout()
      toast.success('Goodbye :(')

      // Redirect to the homepage
      router.push('/')
    } catch (error) {
      console.error('Error logging out', error)
      toast.error('Logout failed')
    }
  }

  return !user ? (
    <div className="max-w-2xl mx-auto p-4 min-h-screen flex justify-center items-center text-2xl">
      Loading...
    </div>
  ) : (
    <div className="max-w-2xl mx-auto p-4">
      <nav className="mb-4 md:mb-8">
        <ul className="flex space-x-2 text-sm md:text-base">
          <li>
            <Link href="/" className="text-blue-600 hover:underline">
              Home
            </Link>
          </li>
          <li>
            <span className="text-gray-400">/</span>
          </li>

          <li>
            <span className="text-gray-600">Account</span>
          </li>
        </ul>
      </nav>
      <h1 className="text-3xl font-bold mb-8 text-center">
        Account Information
      </h1>
      <div className="space-y-6">
        <div className="flex items-center justify-between border-b pb-2">
          <label className="text-sm font-medium text-gray-600">Name</label>
          <div className="flex items-center">
            <span className="mr-2 text-lg font-medium">{user?.name}</span>
            <button
              onClick={() => handleEdit('name')}
              className="text-blue-500 hover:underline focus:outline-none"
            >
              Edit
            </button>
          </div>
        </div>
        <div className="flex items-center justify-between border-b pb-2">
          <label className="text-sm font-medium text-gray-600">Email</label>
          <div className="flex items-center">
            <span className="mr-2 text-lg font-medium">{user?.email}</span>
            <button
              onClick={() => handleEdit('email')}
              className="text-blue-500 hover:underline focus:outline-none"
            >
              Edit
            </button>
          </div>
        </div>
        <div className="flex items-center justify-between border-b pb-2">
          <label className="text-sm font-medium text-gray-600">Address</label>
          <div className="flex items-center">
            <span className="mr-2 text-lg font-medium">{user?.address}</span>
            <button
              onClick={() => handleEdit('address')}
              className="text-blue-500 hover:underline focus:outline-none"
            >
              Edit
            </button>
          </div>
        </div>
      </div>
      {isEditing && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white p-6 rounded shadow-lg w-96">
            <h2 className="text-xl font-bold mb-4">Edit {isEditing}</h2>
            <input
              type="text"
              name={isEditing}
              value={formData[isEditing]}
              onChange={handleChange}
              className="border border-gray-300 p-2 w-full mb-4 rounded"
            />
            <div className="flex justify-end">
              <button
                onClick={() => setIsEditing(null)}
                className="px-4 py-2 bg-gray-200 text-gray-700 rounded hover:bg-gray-300 focus:outline-none"
              >
                Cancel
              </button>
              <button
                onClick={handleFieldSave}
                className="px-4 py-2 bg-blue-500 text-white rounded ml-2 hover:bg-blue-600 focus:outline-none"
              >
                Save
              </button>
            </div>
          </div>
        </div>
      )}
      <div className="flex justify-end mt-8">
        <button
          onClick={handleSave}
          className="px-6 py-3 bg-blue-500 hover:bg-white hover:text-blue-500  border hover:border-blue-500 text-white rounded  focus:outline-none"
        >
          Save All Changes
        </button>
        <button
          onClick={handleLogout}
          className="px-4 py-2 rounded-full text-red-500 border border-red-500 ml-4 hover:bg-red-600 hover:text-white focus:outline-none"
        >
          Logout
        </button>
      </div>
    </div>
  )
}

export default AccountPage
