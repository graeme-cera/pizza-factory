import React from 'react';
import {GenericPizza} from './genericPizza';

export const HawiianPizza = ({options, ...props}) =>{
    return (
       <GenericPizza {...options} label='Hawaiian' description='Ham and Pineapple is not a hate crime'>
           <div className='pizza-toppings pizza-toppings--ham'></div>
           <div className='pizza-toppings pizza-toppings--pineapple'></div>
       </GenericPizza>
    );
};


