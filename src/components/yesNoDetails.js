import React from 'react';
import './questions.css';


export const YesNoDetails = ({options, ...props}) =>{
    const {sectionName, questionName, questionText, helpText} = {...options};

    return (
        <fieldset>
            <legend>{questionText}</legend>
            {helpText ? <div className='question_helpText'>{helpText}</div> : '' }
            <div>
                <label className='question_labelIs'>Is this true?</label>
                <ul>
                    <li><label for={`${sectionName}_${questionName}_isApplicable--yes`}>Yes</label><input type='radio' value='high' name={`${sectionName}_${questionName}_isApplicable`} id={`${sectionName}_${questionName}_isApplicable--yes`}/></li>
                    <li><label for={`${sectionName}_${questionName}_isApplicable--no`}>No</label><input type='radio' value='medium' name={`${sectionName}_${questionName}_isApplicable`} id={`${sectionName}_${questionName}_isApplicable--no`}/></li>
                </ul>
            </div>
            <div>
                <label>Further details</label>
                <textarea name={`${sectionName}_${questionName}_furtherDetails`}></textarea>
            </div>
        </fieldset>
    );
};


