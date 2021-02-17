import React from 'react';
import { nanoid } from 'nanoid';

// import all of the components that are managed by the factory
import {RiskQuestion} from './riskQuestion_grid';
import {PersonalRiskQuestion} from './personalRiskQuestion_grid';
import {OutcomeQuestion} from './outcomeQuestion_grid';
import {VisitScheduleQuestion} from './visitScheduleQuestion_grid';
import {NarrativeQuestion} from './narrativeQuestion';


import './questions.scss';

export const ComponentFactory = ({config}) =>{

    config.id = nanoid();
    const {sections, shortCodes} = config;
    

    // register a constructor for each component
    const constructors = { 
        riskQuestion: (config) => <RiskQuestion key={config.id} config={config}/>,
        personalRiskQuestion: (config) => <PersonalRiskQuestion key={config.id} config={config}/>,
        outcomeQuestion: (config) => <OutcomeQuestion key={config.id} config={config}/>,
        visitScheduleQuestion: (config) => <VisitScheduleQuestion key={config.id} config={config}/>,
        narrativeQuestion: (config) => <NarrativeQuestion key={config.id} config={config}/>,
    };

    // build the specified question
    const build = (question) => {
        var constructor = constructors[question.type];
        
        if(!constructor) {
            console.log(`Error: ${question.type} was not recognised`);
            return null;
        }

        question.id = nanoid();
        question.shortCodes = shortCodes;

        return constructor(question);
    }

    // build the specified section
    const buildSection = (sectionConfig) => {

        const {name, label, questions} = sectionConfig;
        const id = nanoid();

        return (
            <section key={id} id={`section_${id}`} className='formSection'>
                <input type='checkbox' id={`${name}_${id}--toggle`} className='formSection-toggle--visible'/>
                <label key={`label_${id}`} htmlFor={`${name}_${id}--toggle`} className='formSection-label'>{label}</label>
                <div className='formSection-questionsList'>
                    {questions.map(question => build(question))}
                </div>
                <div className='formSection-counter--rowCount'>💬 </div>
                <div className='formSection-counter--invalidCount'>❌ </div>
                <div className='formSection-counter--validCount'>✔️ </div>
            </section>
        );
    }
    

    // build each section in the order
    const buildSections = (sections) => sections.map(sectionConfig => buildSection(sectionConfig));

    return (
            <>
            <div className='control-list'>
                {buildSections(sections)}
            </div>
            <div>
                <datalist id="contactTypes">
                    <option value="Primary"/>
                    <option value="Secondary"/>
                    <option value="Family"/>
                    <option value="Doctor"/>
                    <option value="Lawyer"/>
                </datalist>
            </div>
        </>
    );
};


