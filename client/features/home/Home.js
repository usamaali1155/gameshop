import React from 'react';
import { useSelector } from 'react-redux';
import Carousel from '../carousel/Carousel';



/**
 * COMPONENT
 */
const Home = (props) => {
  // const username = useSelector((state) => state.auth.me.username);

  return (
    <div>
      <Carousel />
    </div>
  );
};

export default Home;
