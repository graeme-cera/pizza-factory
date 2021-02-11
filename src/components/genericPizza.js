import React from 'react';
import './genericPizza.css';


export const GenericPizza = ({ id, crust, size, type, quantity, label, description, ...props }) => {
  return (
    <div key={id} className='pizza-list--item'>
        <div
            className={['generic-pizza', `pizza--${type}`, `generic-pizza--${crust}`, `generic-pizza--${size}`].join(' ')}
            {...props}
        >
        </div>
        <div>{size} {label} ({crust} crust) x {quantity}</div>
        <div>{description}</div>
    </div>
  );
};

