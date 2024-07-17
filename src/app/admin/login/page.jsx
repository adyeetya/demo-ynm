'use client'
import { useState } from 'react'
import axios from 'axios'
const serverUrl = process.env.NEXT_PUBLIC_SERVER_URL
const Page = () => {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')

  const handleUsernameChange = (e) => {
    setUsername(e.target.value)
  }

  const handlePasswordChange = (e) => {
    setPassword(e.target.value)
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    try {
      const res = await axios.post(`${serverUrl}/api/admin/login`, {
        username,
        password,
      })

      if (res.status === 200) {
        const { token } = res.data
        localStorage.setItem('adminToken', token) // Store token in local storage for session management
        console.log('Login successful')
        setError('')
        // Redirect to add product page or set a state to show the page
      } else {
        setError('Invalid credentials')
      }
    } catch (error) {
      console.error('Login error', error)
      setError('Failed to login')
    }
  }

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Admin Login</h1>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label className="block text-gray-700">Username</label>
          <input
            type="text"
            value={username}
            onChange={handleUsernameChange}
            className="w-full px-3 py-2 border rounded-lg"
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700">Password</label>
          <input
            type="password"
            value={password}
            onChange={handlePasswordChange}
            className="w-full px-3 py-2 border rounded-lg"
            required
          />
        </div>
        {error && <p className="text-red-500">{error}</p>}
        <button
          type="submit"
          className="bg-blue-500 text-white px-4 py-2 rounded-lg"
        >
          Login
        </button>
      </form>
    </div>
  )
}

export default Page
