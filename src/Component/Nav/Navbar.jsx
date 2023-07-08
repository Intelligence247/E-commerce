import { Car, Hamburger, ShoppingCart, VideoCameraSlash } from 'phosphor-react';
import './Nav.css';
import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { ShopContext } from '../../Context/Shop_context';
const Navbar = () => {
  const [navAction, SetNavAction] = useState(true);
  const { gettotalAmount } = useContext(ShopContext);
  const total = gettotalAmount();
  return (
    <div className="navW">
      <div className="NavImg">
        <Car size={45} />
      </div>
      <div className={`rightContent ${navAction && 'active'}`}>
        <div className="storeW">
          <p onClick={() => SetNavAction(!navAction)}>
            <a href="/">Home</a>
          </p>
          <p onClick={() => SetNavAction(!navAction)}>
            <a href="#about">About</a>
          </p>
          <Link to="/" onClick={() => SetNavAction(!navAction)}>
            <p className=" text-white cursor-pointer">Store</p>
          </Link>
        </div>
        <span className=""></span>
        <Link to="/cart">
          <div className="navCartW" onClick={() => SetNavAction(!navAction)}>
            <p>
              <ShoppingCart size={32} />
            </p>
            <p>
              <ShoppingCart size={32} color="#FF9800" />
            </p>
            <p>$ {total}</p>
          </div>
        </Link>
      </div>
      <div
        className={`harmburger ${!navAction && 'activeNav'}`}
        onClick={() => SetNavAction(!navAction)}
      >
        <p></p>
        <p></p>
        <p></p>
      </div>
      <div
        className={`overlay ${navAction && 'activeOverlay'}`}
        onClick={() => SetNavAction(!navAction)}
      ></div>
    </div>
  );
};

export default Navbar;
