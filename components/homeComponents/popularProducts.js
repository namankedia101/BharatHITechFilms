import React from 'react';
import productsData from '../../assets/data/productsData';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { Link } from 'react-router-dom';

export const Popularproducts = () => {
  const settings = {
    arrows: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3, // Adjust the number of items per view here
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2, // Number of items per view on tablet
        },
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 1, // Number of items per view on mobile
        },
      },
    ],
  };
  return (
    <section className="bg-gray-100 py-8">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl font-semibold mb-4">Trending Products</h2>
        <Slider {...settings}>
          {productsData.map((product) => (
            <>
              <div className="mr-6">
                <div
                  key={product.id}
                  className=" bg-white p-4 h-[50vh] shadow-md rounded-md bg-no-repeat bg-cover bg-center "
                  style={{ backgroundImage: `url(${product.productImg})` }}
                ></div>
                <div className="flex flex-row justify-between mt-4">
                  <h3 className="text-lg font-semibold">
                    {product.productName}
                  </h3>
                  <Link to={`/shop/product/${product.id}`}>
                    <button className="ml-2 bg-blue-600 text-white px-3 py-1 rounded-md hover:bg-blue-700 transition duration-300">
                      View Details
                    </button>
                  </Link>
                </div>
              </div>
            </>
          ))}
        </Slider>
      </div>
    </section>
  );
};

export default Popularproducts;
