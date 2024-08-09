import React from 'react';
import logo1 from '../assets/images/logo1.jpeg';
import logo2 from '../assets/images/logo2.jpeg';

export const Logo = () => {
  return (
    <>
      <div className=" flex flex-row gap-3 h-[4rem] w-[8rem] items-center">
        <img className="" src={logo1} alt="" />
        <img src={logo2} alt="" className="h-[2rem] w-[6rem]" />
      </div>
    </>
  );
};

export default Logo;
