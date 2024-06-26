'use client';
import { useState } from 'react';
import { auth } from '../../lib/firebase';
import { sendPasswordResetEmail } from "firebase/auth";
import Image from 'next/image';
import NavbarLogo  from "../../../public/icons/Layer_1.png"

export default function ForgotPassword() {
  const [email, setEmail] = useState('');

  const resetEmail = () => {
    sendPasswordResetEmail(auth, email);
  };

  return (
    <>
    <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
        <div className="sm:mx-auto sm:w-full sm:max-w-sm">
          {/* <img
            className="mx-auto h-10 w-auto"
            src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=500"
            alt="Your Company"
          /> */}
          <div className='flex items-center justify-center mt-24 '>

          <Image src={NavbarLogo} alt='hello' className='h-24 w-24 '/>
          </div>
          <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-white">
            Forgot Password
          </h2>
        </div>

        <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
          <div className="space-y-6">
            <div>
              <label htmlFor="email" className="block text-sm font-medium leading-6 ">
                Email address
              </label>
              <div className="mt-2">
                <input
                  id="email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  className="block w-full rounded-md border-0 bg-white/5 py-1.5  shadow-sm ring-1 ring-inset ring-white/10 focus:ring-2 focus:ring-inset focus:ring-indigo-500 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div>
              <button
                onClick={() => resetEmail()}
                disabled={!email}
                className="disabled:opacity-40 flex w-full justify-center rounded-md bg-yellow-500 px-3 py-1.5 text-sm font-semibold leading-6  shadow-sm hover:bg-yellow-400-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-yellow-400"
              >
                Send Forgot Password Email
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}