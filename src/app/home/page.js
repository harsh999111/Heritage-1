import React from 'react';
import Carsole from '../../components/Carosel/carosel'
import Place1 from '../../components/Place1/Place'

const Home = () => {
  return (
    <div className="h-full w-full bg-yellow-100 space-y-4">
      <Carsole />
      <Place1/>
    </div>
  );
};

export default Home;
