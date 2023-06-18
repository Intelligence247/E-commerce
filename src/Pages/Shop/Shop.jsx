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
        {PRODUCTS.map((product) => (
          <EachProduct
            name={product.productName}
            img={product.productImage}
            price={product.price}
          />
        ))}
      </div>
    </div>
  );
};

export default Shop;
