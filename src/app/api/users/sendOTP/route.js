import { NextRequest, NextResponse } from 'next/server'
const otpStore = {}
export async function POST(req) {
  try {
    const reqBody = await req.json()
    const { phoneNumber } = reqBody

    // Generate a random 6-digit OTP
    const generatedOtp = Math.floor(100000 + Math.random() * 900000).toString()
    otpStore[phoneNumber] = generatedOtp

    // TODO: Implement actual OTP sending logic via SMS service

    console.log(`Sending OTP ${generatedOtp} to phone number ${phoneNumber}`)

    return NextResponse.json(
      { message: 'OTP sent successfully' },
      { status: 200 }
    )
  } catch (error) {
    console.log(error)
    return NextResponse.json(
      {
        message: 'something went wrong in try block of send otp post function',
        error: error.message,
      },
      { status: 500 }
    )
  }
}
