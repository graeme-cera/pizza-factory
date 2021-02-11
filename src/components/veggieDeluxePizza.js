import React from 'react';
import {GenericPizza} from './genericPizza';

export const VeggieDeLuxePizza = ({options, ...props}) =>{
    return (
       <GenericPizza {...options} label='Veggie DeLuxe' description='Definitely not one for the carnivores'/>
    );
};


