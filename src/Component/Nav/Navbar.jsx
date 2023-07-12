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
        <Link to="/">
          <Car size={45} />
        </Link>
      </div>
      <div className={`rightContent ${navAction && 'active'}`}>
        <div className="storeW">
          <p onClick={() => SetNavAction(!navAction)}>
            <Link to="/">Home</Link>
          </p>
          <p onClick={() => SetNavAction(!navAction)}>
            <a href="#about">About</a>
          </p>

          <p
            className=" text-white cursor-pointer"
            onClick={() => SetNavAction(!navAction)}
          >
            <a href="#store">Store</a>
          </p>
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
