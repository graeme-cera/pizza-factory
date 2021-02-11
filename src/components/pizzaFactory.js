import React from 'react';

// import all of the components that are managed by the factory
import {HawiianPizza} from './hawiianPizza';
import {MeatFeastPizza} from './meatFeastPizza';
import {VeggieDeLuxePizza} from './veggieDeluxePizza';
import {RiskQuestion} from './riskQuestion';
import {PersonalRiskQuestion} from './personalRiskQuestion';
import {YesNoDetails} from './yesNoDetails';
import {SummaryQuestion} from './summaryQuestion';

export const PizzaFactory = ({order, ...props}) =>{

    // register a constructor for each component
    const constructors = { 
        meatFeast: (options) => <HawiianPizza key={options.id} options={options}/>,
        hawiian: (options) => <MeatFeastPizza key={options.id} options={options}/>,
        veggie: (options) => <VeggieDeLuxePizza key={options.id} options={options}/>,
        riskQuestion: (options) => <RiskQuestion key={options.id} options={options}/>,
        personalRiskQuestion: (options) => <PersonalRiskQuestion key={options.id} options={options}/>,
        yesNoDetails: (options) => <YesNoDetails key={options.id} options={options}/>,
        summaryQuestion: (options) => <SummaryQuestion key={options.id} options={options}/>,
    };

    // build the specified item
    const build = (item) => {
        var constructor = constructors[item.type];
        
        if(!constructor) {
            console.log(`Error: ${item.type} was not recognised`);
            return null;
        }

        return constructor(item);
    }

    // build each item in the order
    const builtItems = order.map(orderItem => build(orderItem));

    return (
        <div className='pizza-list'>
            {builtItems}
        </div>
    );
};


