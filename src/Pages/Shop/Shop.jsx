import React, { useState } from 'react';
import EachProduct from '../../Component/EachProduct/EachProduct';
import { PRODUCTS } from '../../Products';
import './Shop.css';
import About from '../../Component/About/About';
import Hero from '../../Component/Hero/Hero';
import Search from '../../Component/Search/Search';
const Shop = () => {
  // const [BMW, setBMW] = useState({});
  const [PRODUCT, setPRODUCT] = useState([]);
  const [Indexed, setIndexed] = useState(0);
  // const what = Indexed===0?n.productName: Indexed===1?"BMW": Indexed===2?'BENZ':Indexed===3?"ROLCE ROYS":Indexed===4?'LEXUS':n.productName
  console.log(Indexed);
  const filtered = PRODUCTS.filter((n) =>
    (n.productName === Indexed) === 0
      ? n.productName
      : Indexed === 1
      ? 'BMW'
      : Indexed === 2
      ? 'BENZ'
      : Indexed === 3
      ? 'ROLCE ROYS'
      : Indexed === 4
      ? 'LEXUS'
      : n.productName,
  );

  const filtereds = PRODUCTS.filter((n) => {
    // return n.productName === 'ROLCE ROYS';
    if (Indexed === 0) {
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
      return n.productName === n.productName;
    }
  });
  console.log(filtereds);
  return (
    <div className="ShopW">
      <Hero />
      <About />
      <h1 id="store">
        Our <span>Store</span>
      </h1>
      <Search setIndexed={setIndexed} />
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
