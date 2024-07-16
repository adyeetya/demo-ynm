import { NextRequest, NextResponse } from 'next/server'
export async function POST(req) {
  try {
    const reqBody = await req.json()

    const {
      phoneNumber,
      name,
      email,
      address,
      landmark,
      pincode,
      city,
      state,
    } = reqBody
    console.log(
      phoneNumber,
      name,
      email,
      address,
      landmark,
      pincode,
      city,
      state
    )
    // Save user info to the store
    // userStore[phoneNumber] = { name, email, age }

    return NextResponse.json(
      { message: 'User registered successfully' },
      {
        status: 200,
      }
    )
  } catch (error) {
    console.log(error)
    return NextResponse.json(
      { message: 'Internal server error' },
      {
        status: 500,
      }
    )
  }
}
