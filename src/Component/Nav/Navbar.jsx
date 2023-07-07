import { Car, Hamburger, ShoppingCart, VideoCameraSlash } from 'phosphor-react';
import './Nav.css';
import React from 'react';
import { Link } from 'react-router-dom';
const Navbar = () => {
  return (
    <div className="navW">
      <div className="leftContent">
        <div className="NavImg">
          <Car size={60} />
        </div>
        <div className="storeW">
          <p>
            <a href="/">Home</a>
          </p>
          <p>
            <a href="#about">About</a>
          </p>
          <Link to="/">
            <p className=" text-white cursor-pointer">Store</p>
          </Link>
        </div>
        <span className=""></span>
        <Link to="/cart">
          <div className="navCartW">
            <p>
              <ShoppingCart size={32} />
            </p>
            <p>
              <ShoppingCart size={32} color="white" />
            </p>
            <p>$12.00</p>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
