import { useEffect } from 'react'
import axios from 'axios'
import { useUser } from './UserContext'
const serverUrl = process.env.NEXT_PUBLIC_SERVER_URL

export const useFetchUser = () => {
  const { login } = useUser()

 
    const fetchUser = async () => {
      try {
        const response = await axios.get(`${serverUrl}/api/users/getUser`, {
          withCredentials: true,
        })
        if (response.status === 200) {
          login(response.data.user)
        }
      } catch (error) {
        console.error('Failed to fetch user data', error)
      }
    }

    fetchUser()

}
