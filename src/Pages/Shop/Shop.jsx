import React from 'react';
import EachProduct from '../../Component/EachProduct';
import { PRODUCTS } from '../../Products';
import './Shop.css';
import About from '../../Component/About/About';
const Shop = () => {
  return (
    <div className="ShopW">
      <About />
      <h1>Welcome to my Shop</h1>
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
