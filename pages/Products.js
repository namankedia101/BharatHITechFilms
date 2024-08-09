import React from 'react';
import { Link } from 'react-router-dom';
import Productcard from '../components/productCard';
import productsData from '../assets/data/productsData';

export const Products = () => {
  return (
    <>
      <div className="flex flex-col overflow-x-hidden">
        <div className="flex flex-col shop-bg-class items-center justify-center">
          <h1 className="text-4xl font-bold text-white">PRODUCTS</h1>
          <br />
          <h4 className="text-lg font-bold text-white">
            <Link to="/" className="hover:text-orange-300 ">
              Home
            </Link>{' '}
            {'>'} Products
          </h4>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 p-10 md:p-24">
          {productsData.map((product, p, id) => (
            <Link key={id} to={'/shop/product/' + product.id}>
              <Productcard
                productData={product}
                prodImage={product.productImages}
              />
            </Link>
          ))}
        </div>
      </div>
    </>
  );
};

export default Products;
