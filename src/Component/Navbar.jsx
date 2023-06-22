import { ShoppingCart, VideoCameraSlash } from 'phosphor-react';
import React from 'react';
import { Link } from 'react-router-dom';
const Navbar = () => {
  return (
    <div className="h-20 flex lg:justify-end justify-between items-center bg-black px-10 fixed w-full">
      <div className="flex items-center lg:justify-end justify-between w-full gap-8">
        <Link to="/">
          <p className=" text-white cursor-pointer">Shop</p>
        </Link>
        <Link to="/cart">
          <p>
            <ShoppingCart size={32} />
          </p>
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
