import React, { useState } from 'react';
import EachProduct from '../../Component/EachProduct/EachProduct';
import { PRODUCTS } from '../../Products';
import './Shop.css';
import About from '../../Component/About/About';
import Hero from '../../Component/Hero/Hero';
import Search from '../../Component/Search/Search';

const Shop = () => {
  const [Indexed, setIndexed] = useState(0);
  const [Inputs, setInputs] = useState('');
  const inputFilltered = PRODUCTS.filter((n) =>
    n.productName.toUpperCase().includes(Inputs.toUpperCase()),
  );
  console.log(Inputs);
  console.log(inputFilltered);
  const filtereds = PRODUCTS.filter((n) => {
    if (Inputs.length >= 1) {
      return n.productName.toUpperCase().includes(Inputs.toUpperCase());
    } else if (Indexed === 0) {
      return n.productName === n.productName;
    } else if (Indexed === 1) {
      return n.productName === 'BMW';
    } else if (Indexed === 2) {
      return n.productName === 'BENZ';
    } else if (Indexed === 3) {
      return n.productName === 'ROLCE ROYS';
    } else if (Indexed === 4) {
      return n.productName === 'LEXUS';
    } else {
      return inputFilltered;
    }
  });
  const mapping = PRODUCTS.map((p) => {});
  return (
    <div className="ShopW">
      <Hero />
      <About />
      <h1 id="store">
        Our <span>Store</span>
      </h1>
      <Search setIndexed={setIndexed} setInputs={setInputs} />
      <div className="products">
        {filtereds.map((product, i) => (
          <div key={i}>
            <EachProduct data={product} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Shop;
