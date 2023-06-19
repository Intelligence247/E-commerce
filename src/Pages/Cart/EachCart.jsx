import React, { useContext } from 'react';
import { ShopContext } from '../../Context/Shop_context';
const EachCart = (props) => {
  const { id, productName, price, productImage } = props.data;
  // const displayAmount = cartItems[id] > 0 ? `(${cartItems[id]})` : '';
  const { cartItems, addToCart, removeFromCart, editInput } =
    useContext(ShopContext);
  return (
    <div className="flex gap-1 justify-center items-center shadow-black shadow-inner w-[20rem] h-[max] p-2 border-2 rounded-lg">
      <img src={productImage} className="w-20 h-20" alt="" />
      <div>
        <p className="mb-4 text-center font-bold">{productName}</p>
        <div>${price}</div>
        <div className="count flex items-center justify-center">
          <button
            className="text-white w-4 bg-gray-500 h-4 grid place-content-center"
            onClick={() => removeFromCart(id)}
          >
            -
          </button>
          <input
            type="number"
            value={cartItems[id]}
            onChange={(e) => editInput(Number(e.target.value), id)}
            className="w-12 border-[.5px] focus:border-[.5px] focus:outline-[.5px]  h-4 text-center"
          />
          <button
            className="w-4 bg-gray-500 h-4 grid place-content-center text-white"
            onClick={() => addToCart(id)}
          >
            +
          </button>
        </div>
      </div>
    </div>
  );
};

export default EachCart;
