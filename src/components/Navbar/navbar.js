"use client"
import React, { useState, useEffect } from 'react';

const Navbar = () => {
  const Links = [
    { name: "Home", link: '/' },
    { name: "About", link: '/' },
    { name: "Heritage List", link: '/' },
    { name: "Contact Us", link: '#' }, 
  ];

  const [open, setOpen] = useState(false);
  const [isSticky, setIsSticky] = useState(false);
  const [showPopup, setShowPopup] = useState(false);

  const toggleMenu = () => {
    setOpen(!open);
  };

  const togglePopup = () => {
    setShowPopup(!showPopup);
  };

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      setIsSticky(scrollPosition > 0);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <section className={`fixed top-0 w-full z-50 ${isSticky ? 'bg-yellow-500 shadow-md' : 'bg-yellow-500'}`}>
      <nav className="md:px-10 px-7 lg:px-14 md:flex items-center justify-between py-4">
        <div className='text-xl'>
          <div>
            Heritage
          </div>
        </div>
        <div className='text-3xl absolute right-8 top-3 cursor-pointer md:hidden' onClick={toggleMenu}>
          <span className=''>☰</span>
        </div>
        <ul className={`md:flex bg-yellow-500 md:items-center md:pb-0 pb-12 absolute md:static left-0 w-full md:w-auto md:pl-0 pl-9 ${open ? 'block' : 'hidden'}`}>
          {Links.map((Link, index) => (
            <li key={index} className='md:ml-8 text-xl md:my-0 my-7'>
              {Link.name === "Contact Us" ? (
                <a href="#" onClick={togglePopup}>{Link.name}</a>
              ) : (
                <a href={Link.link}>{Link.name}</a>
              )}
            </li>
          ))}
        </ul>
      </nav>

      {/* Pop-up */}
      {showPopup && (
        <section className='h-full w-full fixed top-0 left-0 flex justify-center items-center bg-gray-800 bg-opacity-50'>
          <div className='bg-yellow-600 py-6 px-2 rounded-xl lg:grid lg:justify-center lg:px-[120px] 2xl:px-[100px] 2xl:py-14 grid justify-center items-center'>
            <form className='space-y-6 px-1'>
            <div className='grid justify-end px-2 md:px-5 lg:justify-center'>
              <button className='text-white text-lg bg-black px-6 py-0 rounded-lg ' onClick={togglePopup}>Exit</button>
            </div>
              <div className='space-y-6 md:flex md:items-center lg:space-x-5 lg:px-3'>
                <div className='space-x-8 pt-6 lg:space-x-3'>
                  <span>Name:</span>
                  <label>
                    <input type='text' className='rounded-md pl-4' placeholder='Enter The Name' />
                  </label>
                </div>
                <div className='space-x-9 lg:space-x-3'>
                  <span>Email:</span>
                  <label>
                    <input type='email' className='rounded-md pl-4 ' placeholder='Enter The Email' required autoComplete='' />
                  </label>
                </div>
                <div className='space-x-3'>
                  <span>Country:</span>
                  <select name='country' className='px-14 bg-yellow-500 rounded-lg '>
                    <option value='India' className='text-white'>India</option>
                    <option value='Usa'>USA</option>
                    <option value='Canada'>Canada</option>
                    <option value='Australia'>Australia</option>
                  </select>
                </div>
              </div>
              <div className='px-2 space-y-2 '>
                <div>
                  <span>Message:</span>
                  <div>
                    <textarea rows='4' cols='28' className='p-3 rounded-xl md:w-full md:px-4 ' placeholder='Enter Your Message...' required>
                    </textarea>
                  </div>
                </div>
                <div className='flex justify-center 2xl: pt-3'>
                  <button className='bg-black text-white px-6 py-1 rounded-lg'>Submit</button>
                </div>
              </div>
            </form>
          </div>
        </section>
      )}
    </section>
  );
};

export default Navbar;
