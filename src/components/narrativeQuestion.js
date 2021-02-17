import React,  {useState} from 'react';
import {helpers} from './helpers';
import {ShortCodeTextbox} from './controls_library';
import './narrativeQuestion.scss';

export const NarrativeQuestion = ({config, ...props}) =>{

    const {id, name, label, shortCodes, responses} = {...config};

    const [questionToggle, setQuestionToggle] = useState(responses.length !== 0);
    const [details, setDetails] = useState(helpers.getResponseValue(responses, `${name}_details`));

    return (
        <div className={`question-row narrativeQuestion ${questionToggle?'':'disabled'}`} id={`row_${id}`}>
            <input 
                defaultChecked={questionToggle}
                type="checkbox" 
                onChange={(e) => setQuestionToggle(e.target.checked)} 
                id={`${name}_${id}--toggle`} 
                className='toggle-readonly' 
                />

            <ShortCodeTextbox 
                name={`${name}_details`} 
                id={id} 
                disabled={() => !questionToggle}
                placeholder='Please provide more details - [NA] /[ANA] / [CNA] or  [NR] / [ANR] / [CNR]'
                shortCodes={shortCodes}
                value={details} 
                setValue={(value) => setDetails(value)}/>

            <label htmlFor={`${name}_${id}--toggle`} className='control-label'>{label}</label>
        </div>
    );
};