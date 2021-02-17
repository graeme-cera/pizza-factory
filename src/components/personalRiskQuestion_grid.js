import React,  {useState} from 'react';
import {helpers} from './helpers';
import {PickerHMLX, ShortCodeTextbox} from './controls_library';
import './riskQuestions_grid.scss';

export const PersonalRiskQuestion = ({config, ...props}) =>{

    const {id, name, label, shortCodes, responses} = {...config};

    const [questionToggle, setQuestionToggle] = useState(responses.length !== 0);
    const [riskToCarer, setRiskToCarer] = useState(helpers.getResponseValue(responses, `${name}_riskToCarer`));
    const [riskToClient, setRiskToClient] = useState(helpers.getResponseValue(responses, `${name}_riskToClient`));
    const [initialRiskLevel, setInitialRiskLevel] = useState(helpers.getResponseValue(responses, `${name}_initialRiskLevel`));
    const [riskControlMeasures, setRiskControlMeasures] = useState(helpers.getResponseValue(responses, `${name}_riskControlMeasures`));
    const [residualRiskLevel, setResidualRiskLevel] = useState(helpers.getResponseValue(responses, `${name}_residualRiskLevel`));

    return (
        <div className={`question-row personalRiskQuestion ${questionToggle?'':'disabled'}`} id={`row_${id}`}>
            <input 
                defaultChecked={questionToggle}
                type="checkbox" 
                onChange={(e) => setQuestionToggle(e.target.checked)} 
                id={`${name}_${id}--toggle`} 
                className='toggle-readonly' 
                />

            <ShortCodeTextbox 
                name={`${name}_riskToCarer`} 
                id={id} 
                className='smaller'
                disabled={() => !questionToggle}
                placeholder='Risk to carer'
                shortCodes={shortCodes}
                value={riskToCarer} 
                setValue={(value) => setRiskToCarer(value)}/>


            <ShortCodeTextbox 
                name={`${name}_riskToClient`} 
                id={id} 
                className='smaller'
                disabled={() => !questionToggle}
                placeholder='Risk to client'
                shortCodes={shortCodes}
                value={riskToClient} 
                setValue={(value) => setRiskToClient(value)}/>

        
            <PickerHMLX 
                name={`${name}_initialRiskLevel`} 
                id={id} 
                title='Estimate of initial risk'
                disabled={() => !questionToggle}
                value={initialRiskLevel} 
                setValue={(value) => setInitialRiskLevel(value)}/>
        

            <ShortCodeTextbox 
                name={`${name}_riskControlMeasures`} 
                id={id} 
                disabled={() => !questionToggle}
                placeholder='Control measures to reduce risk'
                shortCodes={shortCodes}
                value={riskControlMeasures} 
                setValue={(value) => setRiskControlMeasures(value)}/>


            <PickerHMLX 
                name={`${name}_residualRiskLevel`} 
                id={id} 
                title='Estimate of residual risk'
                disabled={() => !questionToggle}
                value={residualRiskLevel} 
                setValue={(value) => setResidualRiskLevel(value)}/>
           

            <label htmlFor={`${name}_${id}--toggle`} className='control-label'>{label}</label>
        </div>
    );
};