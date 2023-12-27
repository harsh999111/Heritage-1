import React from 'react';
import Navbar from '@/components/Navbar/navbar';
import './home.css';
import Place from '@/components/Place/place';
import Carosel from '@/components/Carosel/carosel'
import Footer from '@/components/Footer/footer'
import Contact from '@/components/Contact/Contact';

const Home = () => {
  return (
    <div className="h-full w-full bg-yellow-100 space-y-4">
      <Navbar />
      <Carosel />
      <Place />
      {/* <Contact /> */}
      <Footer />
    </div>
  );
};

export default Home;
