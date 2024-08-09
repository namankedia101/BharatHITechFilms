import React from 'react';
import { FaMapMarkerAlt, FaPhone, FaEnvelope } from 'react-icons/fa';

export const Contactcard = () => {
  const contactMethods = [
    {
      icon: <FaMapMarkerAlt className="w-6 h-6" />,
      contact:
        'PLOT NO. G-103, KH NO. 74/16/1 GROUND FLOOR, NAVEEN VIHAR, NEAR AMBEDKAR PARK, VILLAGE BEGUMPUR, DELHI 110086',
      title: 'Our office',
    },
    {
      icon: <FaPhone className="w-6 h-6" />,
      contact: '+91 8860483819',
      title: 'Phone',
    },
    {
      icon: <FaEnvelope className="w-6 h-6" />,
      contact: 'bharathitechfilms@gmail.com',
      title: 'Email',
    },
  ];

  return (
    <section className="py-14">
      <div className="max-w-screen-xl mx-auto px-4 text-center text-gray-600 md:px-8">
        <div className="max-w-2xl mx-auto">
          <h3 className=" text-blue-900 text-4xl font-bold sm:text-4xl">
            GET IN TOUCH
          </h3>
          <p className="mt-3 text-red-600 text-lg">
            Let us know how can we help you?
          </p>
        </div>
        <div className="mt-12">
          <ul className="grid gap-y-8 gap-x-12 sm:grid-cols-2 lg:grid-cols-3">
            {contactMethods.map((item, idx) => (
              <li key={idx} className="space-y-3 shadow-md">
                <div className="w-12 h-12 mx-auto bg-indigo-50 text-red-600 rounded-full flex items-center justify-center">
                  {item.icon}
                </div>
                <h4 className="text-lg text-black font-semibold">
                  {item.title}
                </h4>
                <p className="font-semibold text-gray-800">{item.contact}</p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Contactcard;
