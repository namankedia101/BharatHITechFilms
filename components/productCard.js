import React from 'react';

const Productcard = ({ productData }) => {
  return (
    <>
      <div className="relative group bg-white hover:shadow-red-300 shadow-lg rounded-lg overflow-hidden hover:cursor-pointer m-4">
        <div
          className="prod-img"
          style={{ backgroundImage: `url(${productData.productImg})` }}
        ></div>
        <div className="p-3">
          <p className="text-blue-700 text-lg font-semibold mb-3 text-center">
            {productData.productName}
          </p>
          <button className=" w-full bg-blue-500 text-white px-4 py-2 rounded-md hidden group-hover:block">
            View Details
          </button>
        </div>
      </div>
    </>
  );
};

export default Productcard;
