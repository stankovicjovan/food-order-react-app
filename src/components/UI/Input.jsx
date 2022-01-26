import React from 'react';
import classes from './Input.module.css';

/*LECTURE TODO for input form {...props.input} spreading all props so if we missed something it still gets in input as prop, for example we didnt specify type=text but if we get prop with key/value type=text it still gets used  */
const Input = React.forwardRef((props, ref) => {
  return (
    <div className={classes.input}>
      <label htmlFor={props.input.id}>{props.label}</label>
      <input ref={ref} {...props.input} />
    </div>
  );
});

export default Input;
