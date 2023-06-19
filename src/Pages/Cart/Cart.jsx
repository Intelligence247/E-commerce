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
        {PRODUCTS.map((product) => {
          if (cartItems[product.id] > 0) {
            return <EachCart data={product} />;
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
        <h1>Your cart is empty</h1>
      )}
    </div>
  );
};

export default Cart;
