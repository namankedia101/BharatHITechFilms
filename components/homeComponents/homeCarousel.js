import React from 'react';
import { Link } from 'react-router-dom';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import home1 from '../../assets/images/home1.jpeg';
import home2 from '../../assets/images/home2.jpeg';
import home3 from '../../assets/images/home3.jpeg';

export const HomeCarousel = () => {
  return (
    <section classNameName="relative">
      <Carousel
        showArrows={false}
        showIndicators={true}
        showStatus={false}
        showThumbs={false}
        autoPlay={true}
        interval={5000}
        infiniteLoop={true}
        transitionTime={1000}
        className="text-3xl h-[40vh] md:h-[86vh] "
      >
        <div className="flex">
          <img
            src={home1}
            alt=""
            className="h-[43vh] md:h-[86vh] brightness-50"
          />
          <div className="flex flex-col absolute text-md md:text-3xl top-[7rem] left-[1rem] md:top-52 md:left-10  text-white font-bold">
            <p>PROVIDING SOLUTIONS</p>
            <Link to="/shop">
              <button className="bg-transparent text-white font-semibold hover:text-white px-2 mt-2 border border-white hover:border-transparent rounded">
                READ MORE
              </button>
            </Link>
          </div>
        </div>
        <div className="flex">
          <img
            src={home2}
            alt=""
            className="h-[43vh] md:h-[86vh] brightness-50"
          />
          <div className="flex flex-col absolute text-md md:text-3xl top-[7rem] left-[1rem] md:top-56 md:right-10  text-white font-bold">
            <p>PROVIDING SOLUTIONS</p>
            <Link to="/shop">
              <button className="bg-transparent text-white font-semibold hover:text-white px-2 mt-2 border border-white hover:border-transparent rounded">
                READ MORE
              </button>
            </Link>
          </div>
        </div>
        <div className="flex">
          <img
            src={home3}
            alt=""
            className="h-[43vh] md:h-[86vh] brightness-50"
          />
          <div className="flex flex-col absolute text-md md:text-3xl top-[7rem] left-[1rem] md:top-52 md:left-[57rem]  text-white font-bold">
            <p>PROVIDING SOLUTIONS</p>
            <Link to="/shop">
              <button className="bg-transparent text-white font-semibold hover:text-white px-2 mt-2 border border-white hover:border-transparent rounded">
                READ MORE
              </button>
            </Link>
          </div>
        </div>
      </Carousel>
    </section>
  );
};

export default HomeCarousel;
