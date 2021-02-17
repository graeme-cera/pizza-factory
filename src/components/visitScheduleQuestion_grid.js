import React,  {useState} from 'react';
import {helpers} from './helpers';
import {VisitScheduler} from './controls_library';
import './visitScheduleQuestion_grid.scss';

export const VisitScheduleQuestion = ({config, ...props}) =>{

    const {id, name, label, responses} = {...config};

    const [questionToggle, setQuestionToggle] = useState(responses.length !== 0);
    const [morning, setMorning] = useState(helpers.getResponseValue(responses, `${name}_morning`));
    const [noon, setNoon] = useState(helpers.getResponseValue(responses, `${name}_noon`));
    const [evening, setEvening] = useState(helpers.getResponseValue(responses, `${name}_evening`));
    const [night, setNight] = useState(helpers.getResponseValue(responses, `${name}_night`));
    const [other, setOther] = useState(helpers.getResponseValue(responses, `${name}_other`));
    

    return (
        <div className={`question-row visitScheduleQuestion ${questionToggle?'':'disabled'}`} id={`row_${id}`}>
            <input 
                defaultChecked={questionToggle}
                type="checkbox" 
                onChange={(e) => setQuestionToggle(e.target.checked)} 
                id={`${name}_${id}--toggle`} 
                className='toggle-readonly' 
                />

            <VisitScheduler 
                name={`${name}_morning`} 
                id={id} 
                disabled={() => !questionToggle}
                icon='🕘'
                min='08:00'
                max='12:00'
                title='Morning'
                value={morning} 
                setValue={(value) => setMorning(value)}/>
        
            <VisitScheduler 
                name={`${name}_noon`} 
                id={id} 
                disabled={() => !questionToggle}
                icon='🕛'
                min='11:00'
                max='16:00'
                title='Noon'
                value={noon} 
                setValue={(value) => setNoon(value)}/>

            <VisitScheduler 
                name={`${name}_evening`} 
                id={id} 
                disabled={() => !questionToggle}
                icon='🕓'
                min='15:00'
                max='19:00'
                title='Tea time'
                value={evening} 
                setValue={(value) => setEvening(value)}/>

            <VisitScheduler 
                name={`${name}_nightTime`} 
                id={id} 
                disabled={() => !questionToggle}
                icon='🕖'
                min='18:00'
                max='23:00'
                title='Night time'
                value={night} 
                setValue={(value) => setNight(value)}/>

            <VisitScheduler 
                name={`${name}_other`} 
                id={id} 
                disabled={() => !questionToggle}
                icon='⚪'
                title='Other'
                value={other} 
                setValue={(value) => setOther(value)}/>

            <label htmlFor={`${name}_${id}--toggle`} className='control-label'>{label}</label>
        </div>
    );
};