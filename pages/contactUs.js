import React from 'react';
import { Link } from 'react-router-dom';
import Contactcard from '../components/contactComponents/contactCard';
import Contactform from '../components/contactComponents/contactForm';

export const Contactus = () => {
  return (
    <>
      <div className="flex flex-col overflow-x-hidden">
        <div className="flex flex-col contact-bg-class items-center justify-center">
          <h1 className="text-6xl font-semibold text-white">CONTACT US</h1>
          <br />
          <h4 className="text-lg font-bold text-white">
            <Link to="/" className="hover:text-orange-300 ">
              Home
            </Link>{' '}
            {'>'} Contact Us
          </h4>
        </div>
      </div>
      <Contactcard />
      <div className="mt-6 flex justify-center w-full h-[90vh]">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d6996.7116458283435!2d77.05469514588987!3d28.738791444153645!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d06fb9e38c579%3A0x6068c776e5a72ac2!2sNaveen%20Vihar%2C%20Sector%2032%2C%20Rohini%2C%20Delhi%2C%20110086!5e0!3m2!1sen!2sin!4v1695183660687!5m2!1sen!2sin"
          className="w-full h-[80vh]"
          title="location"
          allowfullscreen=""
          loading="lazy"
          referrerpolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
      <Contactform />
    </>
  );
};
