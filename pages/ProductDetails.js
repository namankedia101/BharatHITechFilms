import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import productsData from '../assets/data/productsData';
import { Link } from 'react-router-dom';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { AiFillCaretLeft, AiFillCaretRight } from 'react-icons/ai';
import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';

export const ProductDetails = () => {
  useEffect(() => {
    // Get the arrow elements
    const arrowElements = document.querySelectorAll('.carousel .control-arrow');

    // Apply custom styles to the arrow elements
    arrowElements.forEach((arrow) => {
      arrow.style.color = 'blue'; // Change this to your desired color
    });
  }, []);

  const { productID } = useParams();
  const selectedProduct = productsData.find(
    (product) => product.id === parseInt(productID)
  );

  if (!selectedProduct) {
    return <div>Product not found.</div>;
  }

  return (
    <section>
      <div className="antialiased">
        <div className="py-6">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center space-x-2 text-gray-400 text-sm">
              <Link to="/" className="hover:underline hover:text-gray-600">
                Home
              </Link>
              <span>
                <svg
                  className="h-5 w-5 leading-none text-gray-300"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </span>
              <Link to="/shop" className="hover:underline hover:text-gray-600">
                Products
              </Link>
            </div>
          </div>

          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-6">
            <div className="flex flex-col md:flex-row -mx-4">
              <div className="flex md:flex-1 px-4">
                <div className="flex h-64 md:h-80 rounded-lg bg-gray-100 mb-4">
                  <div className="flex h-16 md:h-80 rounded-lg bg-gray-100 items-center justify-center">
                    <Carousel
                      showStatus={true}
                      showIndicators={true}
                      showThumbs={false}
                      autoPlay={true}
                      interval={5000}
                      infiniteLoop={true}
                      transitionTime={1000}
                      renderArrowPrev={(clickHandler, hasPrev) => {
                        return (
                          <div
                            className={`${
                              hasPrev ? 'absolute' : 'hidden'
                            } top-0 bottom-0 left-0 flex justify-center items-center p-3 opacity-30 hover:opacity-100 cursor-pointer z-20`}
                            onClick={clickHandler}
                          >
                            <AiFillCaretLeft className="w-9 h-9 text-emerald-400" />
                          </div>
                        );
                      }}
                      renderArrowNext={(clickHandler, hasNext) => {
                        return (
                          <div
                            className={`${
                              hasNext ? 'absolute' : 'hidden'
                            } top-0 bottom-0 right-0 flex justify-center items-center p-3 opacity-30 hover:opacity-100 cursor-pointer z-20`}
                            onClick={clickHandler}
                          >
                            <AiFillCaretRight className="w-9 h-9 text-emerald-400" />
                          </div>
                        );
                      }}
                    >
                      {selectedProduct.productImages.map((image, id) => (
                        <img
                          key={id}
                          src={image}
                          alt=""
                          className="prod-det-img h-[60vh] object-contain"
                        />
                      ))}
                    </Carousel>
                  </div>
                </div>
              </div>
              <div className="mt-8 md:flex-1 px-4">
                <h2 className="mb-2 leading-tight tracking-tight font-bold text-blue-900 text-2xl md:text-3xl">
                  {selectedProduct.productName}
                </h2>
                {selectedProduct.desc.map((des, id) => (
                  <>
                    <p className="text-gray-800 font-semibold" key={id}>
                      {des}
                    </p>
                  </>
                ))}

                <div className="flex py-4 space-x-4">
                  <Popup
                    trigger={
                      <button
                        type="button"
                        className="h-14 px-6 py-2 font-semibold rounded-xl bg-red-600 hover:bg-red-500 text-white"
                      >
                        Get a Quote
                      </button>
                    }
                    modal
                  >
                    <form
                      method="POST"
                      className="block w-full h-full pb-0"
                      action="https://docs.google.com/forms/u/0/d/e/1FAIpQLSeKKV0DFjdziMuS5pi9Y_oXz-LWlz8hgmMephMInPC1QznfFA/formResponse"
                    >
                      <div className="flex flex-col items-center gap-y-5 gap-x-6 [&>*]:w-full sm:flex-row">
                        <div>
                          <label className="font-medium">Your Name</label>
                          <input
                            type="text"
                            name="entry.1392050557"
                            required
                            className="w-full mt-2 px-3 py-2 text-gray-500 bg-transparent outline-none border focus:border-indigo-600 shadow-sm rounded-lg"
                          />
                        </div>
                        <div>
                          <label className="font-medium">Email Address</label>
                          <input
                            type="email"
                            name="entry.2055964439"
                            placeholder="support@email.com"
                            required
                            className="w-full mt-2 px-3 py-2 text-gray-500 bg-transparent outline-none border focus:border-indigo-600 shadow-sm rounded-lg"
                          />
                        </div>
                      </div>
                      <div>
                        <label className="font-medium">Website</label>
                        <input
                          type="text"
                          name="entry.1201404415"
                          className="w-full mt-2 px-3 py-2 text-gray-500 bg-transparent outline-none border focus:border-indigo-600 shadow-sm rounded-lg"
                        />
                      </div>
                      <div>
                        <label className="font-medium">Phone number</label>
                        <div className="relative mt-2">
                          <input
                            placeholder="+91 xxxxxxxxxx"
                            name="entry.1216658461"
                            required
                            className="w-full pl-[4.5rem] pr-3 py-2 appearance-none bg-transparent outline-none border focus:border-indigo-600 shadow-sm rounded-lg"
                          />
                        </div>
                      </div>
                      <div>
                        <label className="font-medium">Message</label>
                        <textarea
                          required
                          name="entry.462711036"
                          className="w-full mt-2 h-36 px-3 py-2 resize-none appearance-none bg-transparent outline-none border focus:border-indigo-600 shadow-sm rounded-lg"
                        ></textarea>
                      </div>
                      <button
                        type="submit"
                        className="w-full px-4 py-2 text-white font-medium bg-indigo-600 hover:bg-indigo-500 active:bg-indigo-600 rounded-lg duration-150"
                      >
                        Submit
                      </button>
                    </form>
                  </Popup>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:p-24 text-white text-left m-8 mb-7">
          <div className="bg-blue-600 rounded-md p-8">
            <h1 className=" text-3xl font-bold">ADVANTAGES:</h1>
            <br />
            {selectedProduct.advantages.map((advantage, id) => (
              <>
                <h3 key={id} className=" mb-3">
                  -{'> '}
                  {advantage}
                </h3>
              </>
            ))}
          </div>
          <div className="bg-blue-600 rounded-md p-8">
            <h1 className=" text-3xl font-bold">APPLICATIONS:</h1>
            <br />
            {selectedProduct.applications.map((application, id) => (
              <>
                <h3 key={id} className=" mb-3">
                  -{'> '}
                  {application}
                </h3>
              </>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
