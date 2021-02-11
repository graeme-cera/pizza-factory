import React from 'react';
import './questions.css';


export const SummaryQuestion = ({options, ...props}) =>{
    const {sectionName, questionName, colour, questionText, helpText} = {...options};

    return (
        <fieldset>
            <legend>{questionText}</legend>
            {helpText ? <div className='question_helpText'>{helpText}</div> : '' }
            <div>
                <label className='question_is--notShown'>Details</label>
                <textarea name={`${sectionName}_${questionName}_furtherDetails`} style={{backgroundColor:colour}}></textarea>
            </div>
        </fieldset>
    );
};


