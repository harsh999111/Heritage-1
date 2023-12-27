import React from 'react'

const Contact = () => {
  return (
    <section className='h-full w-ful'>
      <div className='px-2 2xl:px-96  grid justify-center md:px-[300px]  '>
          <div className='bg-yellow-600 py-10 px-2 rounded-xl  2xl:rounded-2xl  lg:grid lg:justify-center lg:px-[120px]  2xl:px-[100px] 2xl:py-14 grid justify-center items-center' >
            <form className='space-y-6 px-1  ' >
            <div className='space-y-6 md:flex md:items-center lg:space-x-5 lg:px-3 '>

            {/* <-----name------> */}
              <div className='space-x-8 pt-6 lg:space-x-3 '>
              <span>Name:</span>
                <label>
                <input type='text' className='rounded-md pl-4' placeholder='Enter The Name' />
                </label>
              </div>
              {/* <-----email------> */}
              <div className='space-x-9 lg:space-x-3'>
              <span>Email:</span>
                <label>
                <input type='email' className='rounded-md pl-4 ' placeholder='Enter The Email' required autoComplete=''/>
                </label>
              </div>
              {/* <-----Country------> */}
              <div className='space-x-3 '>
              <span>Country:</span>
               <select name='country' className='px-14 bg-yellow-500 rounded-lg '>
                <option value='India' className='text-white'>India</option>
                <option value='Usa'>USA</option>
                <option value='Canada'>Canada</option>
                <option value='Australia'>Australia</option>
               </select>
              </div>
            </div>
              {/* <-----message------> */}
              <div className='px-2 space-y-2 '>
              <div >

              <span>Message:</span>
              <div>

              <textarea rows='4' cols='28'  className='p-3 rounded-xl md:w-full ' placeholder='Enter  Your Message...' required>
              
              </textarea>
              </div>
              </div>
              <div className='flex justify-center 2xl: pt-3'>
                <button className='bg-black text-white px-6 py-1 rounded-lg'>Submit</button>
              </div>
              </div>
            </form>
          </div>
      </div>
    </section>
  )
}

export default Contact