import React from 'react';
import { Link } from 'react-router-dom';
import abt from '../assets/images/abt.jpeg';

export const Aboutcomp = () => {
  return (
    <>
      <section className="py-14">
        <div className="max-w-screen-xl mx-auto md:px-8">
          <div className="items-center gap-x-16 sm:px-4 md:px-0 lg:flex">
            <div className="max-w-xl px-4 space-y-3 mt-6 sm:px-0 md:mt-0 lg:max-w-2xl">
              <h3 className="text-red-600 font-semibold">ABOUT COMPANY</h3>
              <p className="text-blue-900 text-3xl font-bold sm:text-4xl">
                Welcome to Bharat Hi-Tech Films
              </p>
              <p className="mt-3 text-gray-700 font-semibold">
                Founded in 2022, Bharat Hi-Tech Films is a distinguished firm,
                engaged in supplying and trading an extensive range of Cable
                Wrap Material, Thermal Lamination Films, Electrical Motor
                Insulation, Silicone Release Liners, Car Wrapping and Protection
                Film, Poly Films, Plain Aluminium Tape and etc. These products
                are made under the leadership of industry certified experts who
                have prosperous industry practice and skill. Residential and
                commercial patrons owing to their best quality and nominal
                prices broadly use our products. Our firm is backed by adroit
                team, who are dedicated to cater to the diverse necessities and
                demands of the customers. Our professionals work hard to know
                the assorted demands of customers and are proficient enough to
                cater the urgent orders within the preset time schedule. Apart
                from that, experts also check the complete range on a number of
                aspects. With the aid of our state-of-the-art production unit,
                we are capable to provide these products in bespoke options as
                per clients’ varied needs and necessities. Being a
                quality-oriented organization; we promise rich quality and
                perfection in our offered series of products. Manufactured as
                per with the set norms and standards, we guarantee that only
                supreme-grade input and advanced machinery are used in
                developing these products. Furthermore, the complete assortment
                undergoes a diversity of quality inspections before finally
                getting provided at the end of our customers.
              </p>
              <Link
                to="/contact-us"
                className="inline-flex gap-x-1 items-center text-red-900 hover:text-blue-500 duration-150 font-medium"
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
                src={abt}
                className="md:max-w-lg h-full sm:rounded-lg"
                alt=""
              />
            </div>
          </div>
          <div className="max-w-screen-xl mx-auto m-8 p-4 rounded-md text-white bg-red-600">
            <h1 className="text-4xl font-bold">Why Us?</h1>
            <br />
            <p className="text-xl">
              We are a Delhi based firm and are betrothed in providing an
              extensive series of products. Experts use the reliable machines to
              develop these products as per industry demand. In addition,
              professionals also check these products on diverse industry norms
              to make certain the top quality. In addition, our organization has
              proficient professionals who work in proficient way to attain the
              trade aims in effective way. Due to the following characteristics,
              we are capable to attain vast credibility in the market: <br /> •
              High-tech infrastructure facility <br /> • Client-centric approach{' '}
              <br /> • Customization facility <br /> • Competitive price
              structure <br /> • International quality standards <br /> • Timely
              delivery <br /> • Highly experienced team of professionals <br />{' '}
              • Ethical business dealings
            </p>
          </div>
        </div>
        <div className="flex flex-col max-w-screen-xl mx-auto m-8 p-4 gap-6 md:flex-row text-white">
          <div className="rounded-md bg-red-600 p-4">
            <h1 className="text-3xl font-bold">MISSION</h1>
            <br />
            <p className="xl">
              To help our clients protect, preserve, conserve, and promote their
              products by creating the most advanced specialty performance
              materials efficiently and sustainably.
              <br /> Our consistent delivery of top-notch finished products is a
              result of our commitment to stick to our mission despite the
              challenges of the modern world.
            </p>
          </div>
          <div className="rounded-md bg-red-600 p-4">
            <h1 className="text-3xl font-bold">VISION</h1>
            <br />
            <p className="xl">
              To establish leadership in the plastic film business. We will
              ensure total customer satisfaction through innovation, continuous
              improvement of our competence, teamwork, and total employee
              involvement.
            </p>
          </div>
        </div>
      </section>
    </>
  );
};

export default Aboutcomp;
