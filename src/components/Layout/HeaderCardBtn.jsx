import React from 'react';
import CartIcon from '../Cart/CartIcon';
import classes from './HeaderCardBtn.module.css';
import { useContext, useEffect, useState } from 'react';
import CartContext from '../../store/card-context';

const HeaderCardBtn = props => {
  const cartCtx = useContext(CartContext);
  const { items } = cartCtx;

  const numberOfCartItems = items.reduce((curNumber, item) => {
    return curNumber + item.amount;
  }, 0);

  // bump animation
  const [btnIsHighlighted, setBtnIsHighlighted] = useState(false);
  const btnClasses = `${classes.button} ${
    btnIsHighlighted ? classes.bump : ''
  }`;
  useEffect(() => {
    if (items.length === 0) return;
    setBtnIsHighlighted(true);

    const timer = setTimeout(() => {
      setBtnIsHighlighted(false);
    }, 300);
    // cleanup function
    return () => {
      clearTimeout(timer);
    };
  }, [items]);

  return (
    <button className={btnClasses} onClick={props.onShowCart}>
      <span className={classes.icon}>
        <CartIcon />
      </span>
      <span>Your Cart</span>
      <span className={classes.badge}>{numberOfCartItems}</span>
    </button>
  );
};

export default HeaderCardBtn;
