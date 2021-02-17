import React,  {useState} from 'react';
import {helpers} from './helpers';
import {ShortCodeTextbox} from './controls_library';
import './riskAssessedActivityQuestion_grid.scss';

export const RiskAssessedActivityQuestion = ({config, ...props}) =>{

    const {id, name, label, shortCodes, responses} = {...config};

    const [questionToggle, setQuestionToggle] = useState(responses.length !== 0);
    const [activityDetails, setActivityDetails] = useState(helpers.getResponseValue(responses, `${name}_activityDetails`));
    const [activityRisks, setActivityRisks] = useState(helpers.getResponseValue(responses, `${name}_activityRisks`));
    

    return (
        <div className={`question-row riskAssessedActivityQuestion ${questionToggle?'':'disabled'}`} id={`row_${id}`}>
            <input 
                defaultChecked={questionToggle}
                type="checkbox" 
                onChange={(e) => setQuestionToggle(e.target.checked)} 
                id={`${name}_${id}--toggle`} 
                className='toggle-readonly' 
                />

            <ShortCodeTextbox 
                name={`${name}_activityDetails`} 
                id={id} 
                disabled={() => !questionToggle}
                placeholder='Describe all of the requirements and steps'
                shortCodes={shortCodes}
                value={activityDetails} 
                setValue={(value) => setActivityDetails(value)}/>
        
            <ShortCodeTextbox 
                name={`${name}_activityRisks`} 
                id={id} 
                disabled={() => !questionToggle}
                placeholder='Overall Significant Risks and Control Measures'
                shortCodes={shortCodes}
                value={activityRisks} 
                setValue={(value) => setActivityRisks(value)}/>

            <label htmlFor={`${name}_${id}--toggle`} className='control-label'>{label}</label>
        </div>
    );
};