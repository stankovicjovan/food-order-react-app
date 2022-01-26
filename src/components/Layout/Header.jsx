import React from 'react';
import HeaderCardBtn from './HeaderCardBtn';
import classes from './Header.module.css';
import mealsImage from '../../assets/meals.jpg';

const Header = props => {
  return (
    <>
      <header className={classes.header}>
        <h1>ReactMeals</h1>
        <HeaderCardBtn onShowCart={props.onShowCart} />
      </header>
      <div className={classes['main-image']}>
        <img src={mealsImage} alt="A table full of food!" />
      </div>
    </>
  );
};

export default Header;
