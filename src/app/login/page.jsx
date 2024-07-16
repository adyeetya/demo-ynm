'use client'
import React, { useState, useEffect } from 'react'
import { Poppins } from 'next/font/google'
import { RxReload } from 'react-icons/rx'
import { toast } from 'react-hot-toast'
import CustomDropdown from './StateDropdown' // Import the CustomDropdown component
import { useRouter } from 'next/navigation'
import { useSearchParams } from 'next/navigation'
const poppins = Poppins({ weight: '400', subsets: ['latin'] })

const Page = () => {
  const [phoneNumber, setPhoneNumber] = useState('')
  const [otp, setOtp] = useState('')
  const [step, setStep] = useState(1)
  const [message, setMessage] = useState('')
  const [userData, setUserData] = useState({
    name: '',
    email: '',
    address: '',
    landmark: '',
    pincode: '',
    city: '',
    state: '',
  })
  const router = useRouter()
  const searchParams = useSearchParams()
  const referrer = searchParams.get('referrer') || ''
  const states = [
    'Andhra Pradesh',
    'Arunachal Pradesh',
    'Assam',
    'Bihar',
    'Chhattisgarh',
    'Goa',
    'Gujarat',
    'Haryana',
    'Himachal Pradesh',
    'Jharkhand',
    'Karnataka',
    'Kerala',
    'Madhya Pradesh',
    'Maharashtra',
    'Manipur',
    'Meghalaya',
    'Mizoram',
    'Nagaland',
    'Odisha',
    'Punjab',
    'Rajasthan',
    'Sikkim',
    'Tamil Nadu',
    'Telangana',
    'Tripura',
    'Uttar Pradesh',
    'Uttarakhand',
    'West Bengal',
    'Andaman and Nicobar Islands',
    'Chandigarh',
    'Dadra and Nagar Haveli and Daman and Diu',
    'Delhi',
    'Lakshadweep',
    'Puducherry',
  ]

  const handleSendOtp = async () => {
    const res = await fetch('/api/users/sendOTP', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ phoneNumber }),
    })

    const data = await res.json()

    if (res.status === 200) {
      setMessage(`OTP sent successfully on ${phoneNumber}`)
      toast.success('OTP sent successfully')
      setStep(2)
    } else {
      setMessage(data.message)
      toast.error(data.message)
    }
  }

  const handleResendOtp = async () => {
    setMessage('') // Clear the previous message
    const res = await fetch('/api/users/sendOTP', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ phoneNumber }),
    })

    const data = await res.json()

    if (res.status === 200) {
      setMessage(`OTP resent successfully on ${phoneNumber}`)
      toast.success('OTP resent successfully')
    } else {
      setMessage(data.message)
      toast.error(data.message)
    }
  }

  const handleVerifyOtp = async () => {
    const res = await fetch('/api/users/verifyOTP', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ phoneNumber, otp }),
    })

    const data = await res.json()

    if (res.status === 200) {
      setMessage(data.message)
      if (data.userExists) {
        // Handle user login
        setMessage(`Welcome back, ${data.user.name}`)
      } else {
        // Proceed to registration step
        setStep(3)
      }
      toast.success('OTP verified successfully')
    } else {
      toast.error(data.message)
      setMessage(data.message)
    }
  }

  const handleRegister = async () => {
    const res = await fetch('/api/users/register', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ phoneNumber, ...userData }),
    })

    const data = await res.json()

    if (res.status === 200) {
      // Redirect user based on referrer
      console.log('referrer', referrer)
      if (referrer === 'cart') {
        router.push('/checkout')
      } else {
        router.push('/')
      }
      setMessage(data.message)
      toast.success('Registration successful')
      // setStep(1) // Reset to initial step after registration
    } else {
      setMessage(data.message)
    }
  }

  return (
    <div
      className={`max-w-screen-lg md:mt-12 mx-auto min-h-screen ${poppins.className}`}
    >
      <div className="flex flex-col md:flex-row justify-center items-center gap-4">
        <div className="w-full md:w-1/2 h-64 md:h-96 bg-gray-200 flex items-center justify-center rounded-lg">
          <img
            src="/images/login/phone-banner.png"
            alt="Banner"
            className="w-full h-full object-cover rounded-lg"
          />
        </div>

        <div className="md:w-1/2 w-full p-4 text-left">
          {step === 1 && (
            <>
              <h2 className="text-2xl font-semibold">
                Enter your phone number
              </h2>
              <p className="mt-2 text-gray-600">
                You will receive your OTP via SMS
              </p>

              <div className="my-4">
                <label
                  htmlFor="phone-number"
                  className="block text-left text-gray-700"
                >
                  Phone number
                </label>
                <input
                  type="tel"
                  value={phoneNumber}
                  onChange={(e) => setPhoneNumber(e.target.value)}
                  className="border border-gray-300 rounded-lg p-2 w-full"
                />
              </div>

              <button
                onClick={handleSendOtp}
                className="mt-4 px-6 py-2 bg-blue-500 hover:bg-blue-700 text-white rounded-md w-full"
              >
                Get OTP
              </button>
            </>
          )}

          {step === 2 && (
            <>
              <h2 className="text-2xl font-semibold">Enter your OTP</h2>
              <div className="flex items-center mt-2">
                <p className="text-gray-600">{message}</p>
                <button
                  onClick={() => setStep(1)}
                  className="ml-2 text-blue-500 hover:underline"
                >
                  Edit
                </button>
              </div>

              <div className="my-4">
                <label htmlFor="otp" className="block text-left text-gray-700">
                  OTP
                </label>
                <input
                  type="text"
                  value={otp}
                  onChange={(e) => setOtp(e.target.value)}
                  className="border border-gray-300 rounded-lg p-2 w-full"
                />
              </div>

              <button
                onClick={handleVerifyOtp}
                className="mt-4 px-6 py-2 bg-green-500 hover:bg-green-700 text-white rounded-md w-full"
              >
                Verify OTP
              </button>

              <button
                onClick={handleResendOtp}
                className="mt-4 flex justify-center items-center w-full gap-2 hover:text-red-500"
              >
                <RxReload /> Resend OTP
              </button>
            </>
          )}

          {step === 3 && (
            <>
              <h2 className="text-2xl font-semibold">Enter your details</h2>
              <p className="mt-2 text-gray-600">
                Please provide your information
              </p>

              <div className="my-4">
                <label htmlFor="name" className="block text-left text-gray-700">
                  Name
                </label>
                <input
                  type="text"
                  value={userData.name}
                  onChange={(e) =>
                    setUserData({ ...userData, name: e.target.value })
                  }
                  className="border border-gray-300 rounded-lg p-2 w-full"
                />
              </div>

              <div className="my-4">
                <label
                  htmlFor="email"
                  className="block text-left text-gray-700"
                >
                  Email
                </label>
                <input
                  type="email"
                  value={userData.email}
                  onChange={(e) =>
                    setUserData({ ...userData, email: e.target.value })
                  }
                  className="border border-gray-300 rounded-lg p-2 w-full"
                />
              </div>

              <div className="my-4">
                <label
                  htmlFor="address"
                  className="block text-left text-gray-700"
                >
                  Address
                </label>
                <input
                  type="text"
                  value={userData.address}
                  onChange={(e) =>
                    setUserData({ ...userData, address: e.target.value })
                  }
                  className="border border-gray-300 rounded-lg p-2 w-full"
                />
              </div>

              <div className="my-4">
                <label
                  htmlFor="landmark"
                  className="block text-left text-gray-700"
                >
                  Landmark
                </label>
                <input
                  type="text"
                  value={userData.landmark}
                  onChange={(e) =>
                    setUserData({ ...userData, landmark: e.target.value })
                  }
                  className="border border-gray-300 rounded-lg p-2 w-full"
                />
              </div>

              <div className="my-4">
                <label
                  htmlFor="pincode"
                  className="block text-left text-gray-700"
                >
                  Pincode
                </label>
                <input
                  type="text"
                  value={userData.pincode}
                  onChange={(e) =>
                    setUserData({ ...userData, pincode: e.target.value })
                  }
                  className="border border-gray-300 rounded-lg p-2 w-full"
                />
              </div>

              <div className="my-4">
                <label htmlFor="city" className="block text-left text-gray-700">
                  City
                </label>
                <input
                  type="text"
                  value={userData.city}
                  onChange={(e) =>
                    setUserData({ ...userData, city: e.target.value })
                  }
                  className="border border-gray-300 rounded-lg p-2 w-full"
                />
              </div>

              <div className="my-4">
                <label
                  htmlFor="state"
                  className="block text-left text-gray-700"
                >
                  State
                </label>
                <CustomDropdown
                  options={states}
                  selected={userData.state}
                  onSelectedChange={(state) =>
                    setUserData({ ...userData, state })
                  }
                />
              </div>

              <button
                onClick={handleRegister}
                className="mt-4 px-6 py-2 bg-blue-500 hover:bg-blue-700 text-white rounded-md w-full"
              >
                Register
              </button>
            </>
          )}
        </div>
      </div>

      <div className="p-4 mt-8 text-center text-gray-600">
        <p>
          By signing in you agree to our{' '}
          <span className="font-bold">terms of services</span> and
          <span className="font-bold"> privacy policy</span>.
        </p>
      </div>
    </div>
  )
}

export default Page
