'use client'
import Link from 'next/link'
import React, { useState } from 'react'

const Reset = () => {
  const [step, setStep] = useState(1)
  const [email, setEmail] = useState('')
  const [otp, setOtp] = useState('')
  const [password, setPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')

  const handleSendOtp = (e: React.FormEvent) => {
    e.preventDefault()
    if (email) {
      // Trigger email API here
      setStep(2)
    }
  }

  const handleVerifyOtp = (e: React.FormEvent) => {
    e.preventDefault()
    if (otp === '123456') { // Replace with real OTP logic
      setStep(3)
    }
  }

  const handleResetPassword = (e: React.FormEvent) => {
    e.preventDefault()
    if (password === confirmPassword && password.length >= 6) {
      setStep(1)
      setEmail('')
      setOtp('')
      setPassword('')
      setConfirmPassword('')
    }
  }

  return (
    <div className="flex flex-row-reverse h-screen w-full bg-gradient-to-r from-black to-gray-900">
      <div className="w-1/2 hidden items-center justify-center lg:flex">
        {/* <img src={robotImg} alt="Futuristic Robot" className="h-4/5 object-contain" /> */}
      </div>

      <div className="w-full lg:w-1/2 flex flex-col justify-center items-center px-10">
        <h2 className="text-2xl font-bold text-gray-100 mb-1">Forget Password</h2>

        {/* STEP 1 - EMAIL FORM */}
        {step === 1 && (
          <form onSubmit={handleSendOtp} className="w-full max-w-md">
            <input
              type="email"
              placeholder="Enter Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full mb-4 px-4 py-2 border text-gray-100 border-gray-300 rounded bg-transparent"
              required
            />
            <button type="submit" className="w-full bg-amber-400 text-black py-2 rounded">
              Send OTP
            </button>
          </form>
        )}

        {/* STEP 2 - OTP FORM */}
        {step === 2 && (
          <form onSubmit={handleVerifyOtp} className="w-full max-w-md">
            <input
              type="text"
              placeholder="Enter OTP"
              value={otp}
              onChange={(e) => setOtp(e.target.value)}
              className="w-full mb-4 px-4 py-2 border text-gray-100 border-gray-300 rounded bg-transparent"
              required
            />
            <button type="submit" className="w-full bg-green-500 text-white py-2 rounded">
              Verify OTP
            </button>
          </form>
        )}

        {/* STEP 3 - PASSWORD FORM */}
        {step === 3 && (
          <form onSubmit={handleResetPassword} className="w-full max-w-md">
            <input
              type="password"
              placeholder="New Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full mb-4 px-4 py-2 border text-gray-100 border-gray-300 rounded bg-transparent"
              required
            />
            <input
              type="password"
              placeholder="Confirm Password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              className="w-full mb-4 px-4 py-2 border text-gray-100 border-gray-300 rounded bg-transparent"
              required
            />
            <button type="submit" className="w-full bg-white text-black py-2 rounded hover:bg-gray-700 hover:text-white">
              Reset Password
            </button>
          </form>
        )}

        <p className="text-sm text-gray-300 mt-4">
          Already have an account?{' '}
          <Link href="/login" className="text-gray-400 font-semibold">Log In</Link>
        </p>
      </div>
    </div>
  )
}

export default Reset
