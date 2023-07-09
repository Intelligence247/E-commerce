import React, { useContext, useState } from 'react';
import './EachProduct.css';
import { ShopContext } from '../../Context/Shop_context';
const EachProduct = (props) => {
  const { id, productName, price, productImage } = props.data;
  const [bg, setbg] = useState(false);
  const { addToCart, cartItems } = useContext(ShopContext);
  const displayAmount = cartItems[id] > 0 ? `(${cartItems[id]})` : '';

  return (
    <div className="eachP">
      <img src={productImage} className="w-60 h-60" alt="" />
      <p className="mb-4 text-center">{productName}</p>
      <div>${price}</div>
      <button className="productBtn" onClick={() => addToCart(id)}>
        Add To Cart {displayAmount}
      </button>
      <div className="productBorder"></div>
    </div>
  );
};

export default EachProduct;
