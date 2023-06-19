import React from 'react';
import EachProduct from '../../Component/EachProduct';
import { PRODUCTS } from '../../Products';
import './Shop.css';
const Shop = () => {
  return (
    <div className="ShopW">
      <h1>Welcome to my Shop</h1>
      <div className="Products"></div>
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
