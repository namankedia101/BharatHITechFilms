import React from 'react';
import HomeCarousel from '../components/homeComponents/homeCarousel';
import HomeAbout from '../components/homeComponents/homeAbout';
import Popularproducts from '../components/homeComponents/popularProducts';
import Remarks from '../components/homeComponents/remarks';

export const Home = () => {
  return (
    <>
      <HomeCarousel />
      <HomeAbout />
      <Remarks />
      <Popularproducts />
    </>
  );
};
