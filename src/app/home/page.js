import React from 'react';
import Place from '../../components/Place/place'
import Carsole from '../../components/Carosel/carosel'
import Place1 from '../../components/Place1/Place'
import Contact from '../../components/Contact/Contact'
import Navbar from '../../components/Navbar/navbar';
import Footer from '../../components/Footer/footer';

const Home = () => {
  return (
    <div className="h-full w-full bg-yellow-100 space-y-4">
    {/* <Navbar/> */}
      <Carsole />
      {/* <Place /> */}
      <Place1/>
      {/* <Contact /> */}
      {/* <Footer/> */}

    </div>
  );
};

export default Home;
