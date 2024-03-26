"use client"
import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { useRouter } from 'next/navigation'
import { createUserWithEmailAndPassword, updateProfile } from 'firebase/auth';
import { auth } from '../../lib/firebase';
import { toast } from 'react-hot-toast'; 


// Define the Signup component
export default function Signup() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const router = useRouter();
  const [form, setForm] = useState({
    name: '',
    email: '',
    password: '',
    confirmpassword: ''
  });

  const onChangeHandler = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value
    });
  };

  const onSubmit = async (data) => {
    try {
      const { name, email, password } = data;
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);
      const user = userCredential.user;
      await updateProfile(user, {
        displayName: name
      });
      toast.success("Registration successful!"); // Display success toast
      router.push("/home");
    } catch (error) {
      toast.error(error.message); // Display error toast
    }
  };

  return (
    <div className='grid justify-center h-screen w-full items-center'>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className='mb-3'>
          <h1 className='text-center text-xl'>Register</h1>
        </div>
        <div className='py-10'>
          <div className='mb-3 flex gap-x-12'>
            <label htmlFor='name'>Name</label>
            <input type='text' name='name' value={form.name} onChange={onChangeHandler} className='border border-blue-400 w-full'/>
          </div>
          <div className='mb-3 flex gap-x-12'>
            <label htmlFor='email'>Email</label>
            <input type='email' name='email' value={form.email} onChange={onChangeHandler} className='border border-blue-400 w-full'/>
          </div>
          <div className='mb-3 flex gap-x-12'>
            <label htmlFor='password'>Password</label>
            <input type='password' name='password' value={form.password} onChange={onChangeHandler} className='border border-blue-400 w-full'/>
          </div>
          <div className='bg-blue-300 p-2 text-center'>
            <button type='submit'>Register</button>
          </div>
        </div>
      </form>
    </div>
  );
}
