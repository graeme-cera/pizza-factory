import React from 'react';
import './questions.css';


export const PersonalRiskQuestion = ({options, ...props}) =>{
    const {sectionName, questionName, questionText, helpText} = {...options};

    return (
        <fieldset>
            <legend>{questionText}</legend>
            {helpText ? <div className='question_helpText'>{helpText}</div> : '' }
            <div>
                <label>Risk to the carer</label>
                <textarea name={`${sectionName}_${questionName}_riskToCarerDetails`}></textarea>
            </div>
            <div>
                <label>Risk to the service user</label>
                <textarea name={`${sectionName}_${questionName}_riskToClientDetails`}></textarea>
            </div>
            <div>
                <label>Initial risk level</label>
                <ul>
                    <li><label for={`${sectionName}_${questionName}_initialRiskLevel--high`}>High</label><input type='radio' value='high' name={`${sectionName}_${questionName}_initialRiskLevel`} id={`${sectionName}_${questionName}_initialRiskLevel--high`}/></li>
                    <li><label for={`${sectionName}_${questionName}_initialRiskLevel--medium`}>Medium</label><input type='radio' value='medium' name={`${sectionName}_${questionName}_initialRiskLevel`} id={`${sectionName}_${questionName}_initialRiskLevel--medium`}/></li>
                    <li><label for={`${sectionName}_${questionName}_initialRiskLevel--low`}>Low</label><input type='radio' value='low' name={`${sectionName}_${questionName}_initialRiskLevel`} id={`${sectionName}_${questionName}_initialRiskLevel--low`}/></li>
                </ul>
            </div>
            <div>
                <label>Control measures to reduce risk</label>
                <textarea name={`${sectionName}_${questionName}_riskControlMeasures`}></textarea>
            </div>
            <div>
                <label>Residual risk level</label>
                <ul>
                    <li><label for={`${sectionName}_${questionName}_residualRiskLevel--high`}>High</label><input type='radio' value='high' name={`${sectionName}_${questionName}_residualRiskLevel`} id={`${sectionName}_${questionName}_residualRiskLevel--high`}/></li>
                    <li><label for={`${sectionName}_${questionName}_residualRiskLevel--medium`}>Medium</label><input type='radio' value='medium' name={`${sectionName}_${questionName}_residualRiskLevel`} id={`${sectionName}_${questionName}_residualRiskLevel--medium`}/></li>
                    <li><label for={`${sectionName}_${questionName}_residualRiskLevel--low`}>Low</label><input type='radio' value='low' name={`${sectionName}_${questionName}_residualRiskLevel`} id={`${sectionName}_${questionName}_residualRiskLevel--low`}/></li>
                </ul>
            </div>
        </fieldset>
    );
};


