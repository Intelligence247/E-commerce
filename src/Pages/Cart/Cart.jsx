import React, { useContext } from 'react';
import { PRODUCTS } from '../../Products';
import EachCart from './EachCart';
import { ShopContext } from '../../Context/Shop_context';
import './Cart.css';
import { Link } from 'react-router-dom';
const Cart = () => {
  const { cartItems, gettotalAmount } = useContext(ShopContext);
  const total = gettotalAmount();
  return (
    <div className="cartW">
      <h1>These are your carts</h1>
      <div className="cartsChosen">
        {PRODUCTS.map((product, i) => {
          if (cartItems[product.id] > 0) {
            return <EachCart Key={i} data={product} />;
          }
        })}
      </div>
      {total > 0 ? (
        <div>
          {' '}
          <p className="total">Subtotal = ${total}</p>
          <div className="bottomCart">
            <Link to="/">
              <button>Continue Shopping</button>
            </Link>
            <button>Checkout</button>
          </div>
        </div>
      ) : (
        <h1>
          Your cart is empty.{'  '}
          <button>
            <Link
              to="/"
              className="text-[1.5rem] border-0 border-primaryOrange hover:border-b-4 "
            >
              Go to Store
            </Link>
          </button>
        </h1>
      )}
    </div>
  );
};

export default Cart;
