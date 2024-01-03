"use client"
import React, { useState } from 'react';
import axios from 'axios';
import { useForm } from 'react-hook-form';
import { useRouter } from 'next/navigation';
import Image from 'next/image';
import Layer from '../../../public/icons/Layer_1.png'
import Link from 'next/link';

// Define the Signup component
export default function Signup() {
  const {
    register,
    handleSubmit,
    setError,
    formState: { errors, isSubmitting, isValid },
    getValues,
  } = useForm();
  const router = useRouter();
  const [error, setErrorState] = useState(null);

  // Function to handle form submission
  const onSubmit = async (data) => {
    try {
      const response = await axios.post("http://localhost:3000/api/user", data);
      if (response.data.success) {
        alert("User added successfully");
        router.push('/signin');
      } else {
        setErrorState("User with this email already exists");
      }
    } catch (error) {
      console.error("Error adding user:", error);
    }
  };

  // Render the Signup form
  return (
    <div>
      <div className="flex h-full w-full items-centerflex-1 flex-col justify-center px-6 py-24 lg:px-8">
        {/* Form header */}
        <div className="sm:mx-auto sm:w-full sm:max-w-sm">
        <div className='flex justify-center '>
          <Image src={Layer} alt='Layer' className='h-36 w-36'/>
        </div>
          <h2 className="mt-1 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
            Sign Up to your account
          </h2>
        </div>

        {/* Signup form */}
        <div className="mt-2 sm:mx-auto sm:w-full sm:max-w-sm">
          <form className="space-y-1" noValidate onSubmit={handleSubmit(onSubmit)}>
            {/* Name */}
            <div>
              <label htmlFor="name" className="block text-sm font-medium leading-6 text-gray-900">
                Name
              </label>
              <div className="mt-2">
                <input
                  id="name"
                  type="text"
                  autoComplete="name"
                  required
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-yellow-500 sm:text-sm sm:leading-6"
                  {...register("name", {
                    required: {
                      value: true,
                      message: "Name is Required",
                    },
                  })}
                />
                {errors.name && errors.name.type === "required" && (
                  <p className='text-red-400'>Please Enter Name</p>
                )}
              </div>
            </div>

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

            {/* Confirm Password */}
            <div>
              <label htmlFor="confirmPassword" className="block text-sm font-medium leading-6 text-gray-900">
                Confirm Password
              </label>
              <div className="mt-2">
                <input
                  id="confirmPassword"
                  type="password"
                  autoComplete="new-password"
                  required
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-yellow-500 sm:text-sm sm:leading-6"
                  {...register("confirmPassword", {
                    required: {
                      value: true,
                      message: "Confirm Password is Required",
                    },
                    validate: (value) => {
                      const { password } = getValues();
                      return value === password || "Passwords should match";
                    },
                  })}
                />
                {errors.confirmPassword && errors.confirmPassword.type === "required" && (
                  <p className='text-red-400'>Please Enter Confirm Password</p>
                )}
                {errors.confirmPassword && errors.confirmPassword.type === "validate" && (
                  <p className='text-red-400'>{errors.confirmPassword.message}</p>
                )}
              </div>
            </div>

            {/* Signup button */}
            <div>
              <button
                type="submit"
                disabled={isSubmitting || !isValid}
                className="flex mt-4 w-full justify-center rounded-md bg-yellow-500 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-yellow-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-yellow-500 disabled:bg-yellow-200 disabled:cursor-wait"
              >
                Sign Up
              </button>
        <div className="pt-2">

        <Link href="/Bording" className='bg-black text-white flex justify-center '>Home</Link>
        </div>
            </div>

            {/* Error messages */}
            {errors.api && (
              <div className="mt-2 text-center text-red-500">
                {errors.api.message}
              </div>
            )}
            {error && (
              <div className="mt-2 text-center text-red-500">
                {error}
              </div>
            )}
          </form>
        </div>
      </div>
    </div>
  );
}
