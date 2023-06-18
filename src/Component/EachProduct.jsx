import React from 'react';

const EachProduct = ({ img, name, price }) => {
  return (
    <div className="flex flex-col gap-1 justify-center items-center w-[18rem] h-[max] p-2 border-2 rounded-lg">
      <img src={img} className="w-60 h-60" alt="" />
      <p className="mb-4 text-center">{name}</p>
      <div>${price}</div>
      <button className="px-4 border-[1px] border-black rounded-full hover:bg-black hover:text-white">
        Add To Cart
      </button>
    </div>
  );
};

export default EachProduct;
