import React, { useState } from 'react';
import EachProduct from '../../Component/EachProduct/EachProduct';
import { PRODUCTS } from '../../Products';
import './Shop.css';
import About from '../../Component/About/About';
import Hero from '../../Component/Hero/Hero';
import Search from '../../Component/Search/Search';
const Shop = () => {
  const [BMW, setBMW] = useState({});
  const handleALLClick = () => {
    const filter = PRODUCTS.filter((n) => n.productName === 'BMW');
    return filter;
  };
  console.log(handleALLClick());
  return (
    <div className="ShopW">
      <Hero />
      <About />
      <h1 id="store">
        Our <span>Store</span>
      </h1>
      <Search handleAllclick={handleALLClick} />
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
