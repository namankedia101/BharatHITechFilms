import React from 'react';
import { Link } from 'react-router-dom';
import homeabt from '../../assets/images/home-abt.jpeg';

const HomeAbout = () => {
  return (
    <section className="p-14 overflow-x-hidden">
      <div className="max-w-screen-xl mx-auto md:px-8">
        <div className="items-center gap-x-16 sm:px-4 md:px-0 lg:flex">
          <div className="max-w-xl space-y-3 mt-6 sm:px-0 md:mt-0 lg:max-w-2xl">
            <p className="text-blue-900 text-3xl font-bold sm:text-4xl">
              Leading manufacturer of Pet Films
            </p>
            <br />
            <p className="mt-3 text-gray-800 font-semibold">
              Bharat Hi-Tech Films offers an unparalleled portfolio of products,
              services, and capabilities for pet films, speciality films and
              release liners. We combine global expertise and local experience
              in a fully integrated and quality-focused organization.
            </p>
            <Link
              to="/contact-us"
              className="inline-flex gap-x-1 items-center text-red-600 hover:text-blue-500 duration-150 font-medium"
            >
              Learn more
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                className="w-5 h-5"
              >
                <path
                  fillRule="evenodd"
                  d="M3 10a.75.75 0 01.75-.75h10.638L10.23 5.29a.75.75 0 111.04-1.08l5.5 5.25a.75.75 0 010 1.08l-5.5 5.25a.75.75 0 11-1.04-1.08l4.158-3.96H3.75A.75.75 0 013 10z"
                  clipRule="evenodd"
                />
              </svg>
            </Link>
          </div>
          <div className="flex-1 sm:hidden lg:block">
            <img
              src={homeabt}
              className="md:max-w-lg h-full sm:rounded-lg"
              alt=""
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomeAbout;
