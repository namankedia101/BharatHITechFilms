import React from 'react';
import rohs from '../assets/images/rohs-cert.jpg';
import iso from '../assets/images/iso-cert.jpg';
import { Link } from 'react-router-dom';

export const Quality = () => {
  return (
    <section>
      <div className="flex flex-col overflow-x-hidden">
        <div className="flex flex-col qlty-bg-class items-center justify-center">
          <h1 className="text-4xl font-bold text-white text-center">
            QUALITY ASSURANCE
          </h1>
          <br />
          <h4 className="text-lg font-bold text-white">
            <Link to="/" className="hover:text-orange-300 ">
              Home
            </Link>{' '}
            {'>'} Quality Assurance
          </h4>
        </div>
      </div>
      <div className="rounded-md w-full bg-blue-900  max-w-screen-xl mx-auto m-10 p-10 md:flex-row text-black">
        <div className="bg-red-500 text-white text-xl font-bold p-7 rounded-md mb-3 text-center">
          <p>
            "We believe in setting benchmarks in quality, rather than just
            meeting the standards"
          </p>
        </div>
        <p className="text-white text-center mb-10">
          Quality with efficiency have always been very critical to our success.
          Bharat Hi-Tech films offers a wide range of products for industries
          where technology needs are of concern. Proven in the field for many
          years, our product range helps you to optimize productivity and
          maximize uptime.
        </p>
        <div className="flex md:flex-row flex-col gap-12 justify-center">
          <div className="bg-white flex flex-col items-center md:h-72 p-8 hover:bg-red-500 hover:text-white">
            <img src={rohs} alt="" className=" h-30 w-40" />
            <p>
              Restriction of Hazardous Substances Directive (RoHS Directive):
              <br />
              paying heeds to the environmental impacts <br />
              we have all of our products in compliance with the RoHS
              directives.
            </p>
          </div>
          <div className="bg-white flex flex-col items-center md:w-[537px] gap-10 p-8 hover:bg-red-500 hover:text-white">
            <img src={iso} alt="" className=" h-30 w-40" />
            <p>ISO Certified Organization</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Quality;
