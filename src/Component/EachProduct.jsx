import React, { useContext } from 'react';
import { ShopContext } from '../Context/Shop_context';
const EachProduct = (props) => {
  const { id, productName, price, productImage } = props.data;
  const { addToCart, cartItems } = useContext(ShopContext);
  const displayAmount = cartItems[id] > 0 ? `(${cartItems[id]})` : '';
  return (
    <div className="flex flex-col gap-1 justify-center items-center w-[18rem] h-[max] p-2 border-2 rounded-lg">
      <img src={productImage} className="w-60 h-60" alt="" />
      <p className="mb-4 text-center">{productName}</p>
      <div>${price}</div>
      <button
        className="px-4 border-[1px] border-black rounded-full hover:bg-black hover:text-white"
        onClick={() => addToCart(id)}
      >
        Add To Cart {displayAmount}
      </button>
    </div>
  );
};

export default EachProduct;
