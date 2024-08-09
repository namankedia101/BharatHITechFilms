import React from 'react';
import Aboutcomp from '../components/aboutComp';
import { Link } from 'react-router-dom';

export const About = () => {
  return (
    <>
      <div className="flex flex-col overflow-x-hidden">
        <div className="flex flex-col about-bg-class items-center justify-center">
          <h1 className="text-4xl font-bold text-white">ABOUT US</h1>
          <br />
          <h4 className="text-lg font-bold text-white">
            <Link to="/" className="hover:text-orange-300 ">
              Home
            </Link>{' '}
            {'>'} About Us
          </h4>
        </div>
      </div>
      <Aboutcomp />
    </>
  );
};
