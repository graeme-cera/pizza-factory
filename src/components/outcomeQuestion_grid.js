import React,  {useState} from 'react';
import {helpers} from './helpers';
import {ShortCodeTextbox} from './controls_library';
import './outcomeQuestion_grid.scss';

export const OutcomeQuestion = ({config, ...props}) =>{

    const {id, name, label, shortCodes, responses} = {...config};

    const [questionToggle, setQuestionToggle] = useState(responses.length !== 0);
    const [clientOutcome, setClientOutcome] = useState(helpers.getResponseValue(responses, `${name}_clientOutcome`));
    const [actionPlan, setActionPlan] = useState(helpers.getResponseValue(responses, `${name}_actionPlan`));
    const [howAndWhen, setHowAndWhen] = useState(helpers.getResponseValue(responses, `${name}_howAndWhen`));

    return (
        <div className={`question-row outcomeQuestion ${questionToggle?'':'disabled'}`} id={`row_${id}`}>
            <input 
                defaultChecked={questionToggle}
                type="checkbox" 
                onChange={(e) => setQuestionToggle(e.target.checked)} 
                id={`${name}_${id}--toggle`} 
                className='toggle-readonly' 
                />

            <ShortCodeTextbox 
                name={`${name}_clientOutcome`} 
                id={id} 
                disabled={() => !questionToggle}
                placeholder='My Outcomes'
                shortCodes={shortCodes}
                value={clientOutcome} 
                setValue={(value) => setClientOutcome(value)}/>
        
            <ShortCodeTextbox 
                name={`${name}_actionPlan`} 
                id={id} 
                disabled={() => !questionToggle}
                placeholder='What will be put in place to achieve my outcomes?'
                shortCodes={shortCodes}
                value={actionPlan} 
                setValue={(value) => setActionPlan(value)}/>


            <ShortCodeTextbox 
                name={`${name}_howAndWhen`} 
                id={id} 
                disabled={() => !questionToggle}
                placeholder='Who will provide this? How and when will it be provided?'
                shortCodes={shortCodes}
                value={howAndWhen} 
                setValue={(value) => setHowAndWhen(value)}/>

            <label htmlFor={`${name}_${id}--toggle`} className='control-label'>{label}</label>
        </div>
    );
};