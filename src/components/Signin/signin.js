"use client"
import React, { useState } from 'react';
import axios from 'axios';
import { useForm } from 'react-hook-form';
import { useRouter } from 'next/navigation';
import Image from 'next/image';
import Layer from '../../../public/icons/Layer_1.png'



// Signup component
export default function Signup() {
  const {
    register,
    handleSubmit,
    setError,
    formState: { errors, isSubmitting, isValid },
  } = useForm();


  const router = useRouter();

  const onSubmit = async (data) => {
    try {
      const response = await axios.post("/api/signin", data);

      if (response.status >= 200 && response.status <= 300 ) {
        router.push('/Bording');
      } else {
        setError("api", { message: response.data.message || "Failed to sign in" });
      }
    } catch (error) {
      setError("api", { message: "Internal server error" });
    }
  };


  console.log(errors);

  // JSX for the Signup component
  return (
    <div>
      <div className="flex   h-full flex-1 flex-col justify-center px-6 py-32 lg:px-8">
        <div className="sm:mx-auto sm:w-full sm:max-w-sm">
        <div className='flex justify-center '>
          <Image src={Layer} alt='Layer' className='h-36 w-36'/>
        </div>
          <h2 className="mt-1 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
            Sign in to your account
          </h2>
        </div>

        <div className="mt-2 sm:mx-auto sm:w-full sm:max-w-sm">
          <form className="space-y-1" noValidate onSubmit={handleSubmit(onSubmit)}>
            

            {/* Email */}
            <div>
              <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900">
                Email address
              </label>
              <div className="mt-2">
                <input
                  id="email"
                  type="email"
                  autoComplete="email"
                  required
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-yellow-500 sm:text-sm sm:leading-6"
                  {...register("email", {
                    required: {
                      value: true,
                      message: "Email is Required",
                    },
                    pattern: {
                      value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                      message: "Please Provide a Valid Email Address",
                    },
                  })}
                />
                {errors.email && errors.email.type === "required" && (
                  <p className='text-red-400'>Please Enter Email</p>
                )}
                {errors.email && errors.email.type === "pattern" && (
                  <p className='text-red-400'>{errors.email.message}</p>
                )}
              </div>
            </div>

            {/* Password */}
            <div>
              <label htmlFor="password" className="block text-sm font-medium leading-6 text-gray-900">
                Password
              </label>
              <div className="mt-2">
                <input
                  id="password"
                  type="password"
                  autoComplete="current-password"
                  required
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-yellow-500 sm:text-sm sm:leading-6"
                  {...register("password", {
                    required: {
                      value: true,
                      message: "Password is Required",
                    },
                    pattern: {
                      value: /^[a-zA-Z0-9!@#$%^&*]{6,16}$/,
                      message: "Please Provide a Valid Password",
                    },
                    minLength: {
                      value: 6,
                      message: "Password should be at least 6 characters",
                    },
                  })}
                />
                {errors.password && errors.password.type === "required" && (
                  <p className='text-red-400'>Please Enter Password</p>
                )}
                {errors.password && errors.password.type === "pattern" && (
                  <p className='text-red-400'>{errors.password.message}</p>
                )}
                {errors.password && errors.password.type === "minLength" && (
                  <p className='text-red-400'>{errors.password.message}</p>
                )}
              </div>
            </div>

          
            <div>
              <button
                type="submit"
                disabled={isSubmitting || !isValid}
                className="flex mt-4 w-full justify-center rounded-md bg-yellow-500 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-yellow-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-yellow-500 disabled:bg-yellow-200 disabled:cursor-wait"
              >
                Sign In
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
