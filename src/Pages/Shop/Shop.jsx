import React from 'react';
import EachProduct from '../../Component/EachProduct';
import { PRODUCTS } from '../../Products';
import './Shop.css';
import About from '../../Component/About/About';
import Hero from '../../Component/Hero/Hero';
import Search from '../../Component/Search/Search';
const Shop = () => {
  return (
    <div className="ShopW">
      <Hero />
      <About />
      <h1>
        Our <span>Store</span>
      </h1>
      <Search />
      <div className="products">
        {PRODUCTS.map((product, i) => (
          <div key={i}>
            <EachProduct data={product} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Shop;
