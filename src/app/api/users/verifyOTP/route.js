import { NextRequest, NextResponse } from 'next/server'
const userStore = {}
export async function POST(req) {
  try {
    const reqBody = await req.json()
    const { phoneNumber, otp } = reqBody
    console.log(phoneNumber, otp)

    // if (otpStore[phoneNumber] && otpStore[phoneNumber] === otp) {
    if (true) {
      // assuming the otp matches for dummy
      //   delete otpStore[phoneNumber] // Clear OTP after verification

      if (userStore[phoneNumber]) {
        // User exists, log them in
        return NextResponse.json(
          {
            message: 'OTP verified successfully',
            userExists: true,
            user: userStore[phoneNumber],
          },
          { status: 200 }
        )
      } else {
        // User does not exist, proceed with registration
        return NextResponse.json(
          {
            message: 'OTP verified successfully',
            userExists: false,
          },
          { status: 200 }
        )
      }
    } else {
    }
  } catch (error) {
    console.log(error)
    return NextResponse.json(
      {
        message:
          'something went wrong in try block of verify otp post function',
        error: error.message,
      },
      { status: 500 }
    )
  }
}
