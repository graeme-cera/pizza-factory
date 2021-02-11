import React from 'react';
import {GenericPizza} from './genericPizza';

export const MeatFeastPizza = ({options, ...props}) =>{
    return (
       <GenericPizza {...options} label='Meat Feast' description='Definitely not one for the vegans'/>
    );
};


