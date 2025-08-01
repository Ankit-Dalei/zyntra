'use client'
import Link from 'next/link'
import React, { useState } from 'react'

const Signup = () => {
  const NewDate=new Date();
  const [SignUpData,setSignUpData]=useState({
    firstName:'',
    lastName:'',
    email:'',
    password:'',
    confirmPassword:'',
    role:'',
    date:NewDate.toLocaleDateString(),
    time:NewDate.getHours()+'-'+NewDate.getMinutes()+'-'+NewDate.getSeconds(),
    status:''
  })

  const setValues=(key: any,val: any)=>{
    setSignUpData(prevData => ({
    ...prevData,
    [key]: val
  }));
  }

  const handleSignup = (e: React.FormEvent) => {
    e.preventDefault()
    const {firstName, lastName, email,password,confirmPassword}=SignUpData
    console.log(SignUpData)
    // implementation
  }

  return (
    <div className="flex flex-row-reverse h-screen w-full bg-gradient-to-r from-black to-gray-900">
      {/* Left Side - Image */}
      <div className="w-1/2 hidden items-center justify-center lg:flex">
        {/* <img src={robotImg} alt="Futuristic Robot" className="h-4/5 object-contain" /> */}
      </div>

      {/* Right Side - Signup Form */}
      <form onSubmit={handleSignup} className="w-full lg:w-1/2 flex flex-col justify-center items-center px-10">
        <h2 className="text-2xl font-bold text-gray-100 mb-1">Kick start Your</h2>
        <h3 className="text-xl text-gray-600 mb-8">Development Journey</h3>

        <div className="flex md:flex-row flex-col justify-center items-center gap-4 w-full max-w-md mb-4">
          <input
            type="text"
            placeholder="First Name"
            value={SignUpData.firstName}
            name={`firstName`}
            onChange={(e) => setValues(e.target.name,e.target.value)}
            className="w-full md:w-1/2 px-4 py-2 border text-gray-100 border-gray-300 rounded bg-transparent"
          />
          <input
            type="text"
            placeholder="Last Name"
            value={SignUpData.lastName}
            name={`lastName`}
            onChange={(e) => setValues(e.target.name,e.target.value)}
            className="w-full md:w-1/2 px-4 py-2 border text-gray-100 border-gray-300 rounded bg-transparent"
          />
        </div>

        <input
          type="email"
          placeholder="Enter Email"
          value={SignUpData.email}
          name={`email`}
          onChange={(e) => setValues(e.target.name,e.target.value)}
          className="w-full max-w-md mb-4 px-4 py-2 border text-gray-100 border-gray-300 rounded bg-transparent"
        />

        <div className="flex md:flex-row flex-col justify-center items-center gap-4 w-full max-w-md mb-4">
          <input
            type="password"
            placeholder="Password"
            value={SignUpData.password}
            name={`password`}
            onChange={(e) => setValues(e.target.name,e.target.value)}
            className="w-full md:w-1/2 px-4 py-2 border text-gray-100 border-gray-300 rounded bg-transparent"
          />
          <input
            type="password"
            placeholder="Confirm Password"
            value={SignUpData.confirmPassword}
            name={`confirmPassword`}
            onChange={(e) => setValues(e.target.name,e.target.value)}
            className="w-full md:w-1/2 px-4 py-2 border text-gray-100 border-gray-300 rounded bg-transparent"
          />
        </div>
        {/* <input
          type="date"
          placeholder="Date of Birth"
          value={SignUpData.dob}
          name={`dob`}
          onChange={(e) => setValues(e.target.name,e.target.value)}
          className="w-full max-w-md mb-4 px-4 py-2 border text-gray-100 border-gray-300 rounded bg-transparent"
        /> */}

        <button type="submit" className="w-full max-w-md bg-black hover:bg-gray-400 hover:text-black text-white py-2 rounded mb-4">
          Sign up
        </button>

        <p className="text-gray-300 text-sm mb-4">Or continue with</p>

        <div className="flex space-x-4 mb-4">
          <button className="border bg-gray-300 rounded p-2 px-4">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 128 128" height={20} width={20}>
              <path fillrule-rule="#fff" d="M44.59 4.21a63.28 63.28 0 004.33 120.9 67.6 67.6 0 0032.36.35 57.13 57.13 0 0025.9-13.46 57.44 57.44 0 0016-26.26 74.33 74.33 0 001.61-33.58H65.27v24.69h34.47a29.72 29.72 0 01-12.66 19.52 36.16 36.16 0 01-13.93 5.5 41.29 41.29 0 01-15.1 0A37.16 37.16 0 0144 95.74a39.3 39.3 0 01-14.5-19.42 38.31 38.31 0 010-24.63 39.25 39.25 0 019.18-14.91A37.17 37.17 0 0176.13 27a34.28 34.28 0 0113.64 8q5.83-5.8 11.64-11.63c2-2.09 4.18-4.08 6.15-6.22A61.22 61.22 0 0087.2 4.59a64 64 0 00-42.61-.38z"/>
              <path fillrule-rule="#e33629" d="M44.59 4.21a64 64 0 0142.61.37 61.22 61.22 0 0120.35 12.62c-2 2.14-4.11 4.14-6.15 6.22Q95.58 29.23 89.77 35a34.28 34.28 0 00-13.64-8 37.17 37.17 0 00-37.46 9.74 39.25 39.25 0 00-9.18 14.91L8.76 35.6A63.53 63.53 0 0144.59 4.21z"/>
              <path fillrule-rule="#f8bd00" d="M3.26 51.5a62.93 62.93 0 015.5-15.9l20.73 16.09a38.31 38.31 0 000 24.63q-10.36 8-20.73 16.08a63.33 63.33 0 01-5.5-40.9z"/>
              <path fillrule-rule="#587dbd" d="M65.27 52.15h59.52a74.33 74.33 0 01-1.61 33.58 57.44 57.44 0 01-16 26.26c-6.69-5.22-13.41-10.4-20.1-15.62a29.72 29.72 0 0012.66-19.54H65.27c-.01-8.22 0-16.45 0-24.68z"/>
              <path fillrule-rule="#319f43" d="M8.75 92.4q10.37-8 20.73-16.08A39.3 39.3 0 0044 95.74a37.16 37.16 0 0014.08 6.08 41.29 41.29 0 0015.1 0 36.16 36.16 0 0013.93-5.5c6.69 5.22 13.41 10.4 20.1 15.62a57.13 57.13 0 01-25.9 13.47 67.6 67.6 0 01-32.36-.35 63 63 0 01-23-11.59A63.73 63.73 0 018.75 92.4z"/>
            </svg>
          </button>
          <button className="border bg-gray-300 rounded p-2 px-4">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 128 128" height={20} width={20}>
              <g fillrule-rule="#181616">
                <path fillrule-rule-="evenodd" clipRule="evenodd" d="M64 5.103c-33.347 0-60.388 27.035-60.388 60.388 0 26.682 17.303 49.317 41.297 57.303 3.017.56 4.125-1.31 4.125-2.905 0-1.44-.056-6.197-.082-11.243-16.8 3.653-20.345-7.125-20.345-7.125-2.747-6.98-6.705-8.836-6.705-8.836-5.48-3.748.413-3.67.413-3.67 6.063.425 9.257 6.223 9.257 6.223 5.386 9.23 14.127 6.562 17.573 5.02.542-3.903 2.107-6.568 3.834-8.076-13.413-1.525-27.514-6.704-27.514-29.843 0-6.593 2.36-11.98 6.223-16.21-.628-1.52-2.695-7.662.584-15.98 0 0 5.07-1.623 16.61 6.19C53.7 35 58.867 34.327 64 34.304c5.13.023 10.3.694 15.127 2.033 11.526-7.813 16.59-6.19 16.59-6.19 3.287 8.317 1.22 14.46.593 15.98 3.872 4.23 6.215 9.617 6.215 16.21 0 23.194-14.127 28.3-27.574 29.796 2.167 1.874 4.097 5.55 4.097 11.183 0 8.08-.07 14.583-.07 16.572 0 1.607 1.088 3.49 4.148 2.897 23.98-7.994 41.263-30.622 41.263-57.294C124.388 32.14 97.35 5.104 64 5.104z"/>
                <path d="M26.484 91.806c-.133.3-.605.39-1.035.185-.44-.196-.685-.605-.543-.906.13-.31.603-.395 1.04-.188.44.197.69.61.537.91zm2.446 2.729c-.287.267-.85.143-1.232-.28-.396-.42-.47-.983-.177-1.254.298-.266.844-.14 1.24.28.394.426.472.984.17 1.255zM31.312 98.012c-.37.258-.976.017-1.35-.52-.37-.538-.37-1.183.01-1.44.373-.258.97-.025 1.35.507.368.545.368 1.19-.01 1.452zm3.261 3.361c-.33.365-1.036.267-1.552-.23-.527-.487-.674-1.18-.343-1.544.336-.366 1.045-.264 1.564.23.527.486.686 1.18.333 1.543zm4.5 1.951c-.147.473-.825.688-1.51.486-.683-.207-1.13-.76-.99-1.238.14-.477.823-.7 1.512-.485.683.206 1.13.756.988 1.237zm4.943.361c.017.498-.563.91-1.28.92-.723.017-1.308-.387-1.315-.877 0-.503.568-.91 1.29-.924.717-.013 1.306.387 1.306.88zm4.598-.782c.086.485-.413.984-1.126 1.117-.7.13-1.35-.172-1.44-.653-.086-.498.422-.997 1.122-1.126.714-.123 1.354.17 1.444.663zm0 0"/>
              </g>
            </svg>
          </button>
          {/* <button className="border bg-gray-300 rounded p-2 px-4">Facebook</button> */}
        </div>

        <p className="text-sm text-gray-200">
          Already have an account?{' '}
          <Link href="/login" className="text-gray-400 font-semibold">Log In</Link>
        </p>
      </form>
    </div>
  )
}

export default Signup
