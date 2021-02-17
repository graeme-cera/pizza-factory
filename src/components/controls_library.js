import React from 'react';
import {helpers} from './helpers';

export const PickerHMLX = ({name, id, title, disabled, value, setValue, ...options}) => {
return (
        <input 
            className='picker-HML'
            disabled = {disabled()}
            id={`${name}${id}`} 
            maxLength='1'
            minLength='1'
            name={`${name}`} 
            pattern='[HMLX]'
            placeholder='HML'
            required
            title = {`${title} [H, M, L or X]`}
            type='text'
            value={value}
            {...options}
            onInput={(e) => setValue(helpers.limitToList(e, 'HMLX'))}
        />
    );
}

export const ShortCodeTextbox = ({name, id, disabled, value, setValue, shortCodes, ...options}) => {
return (
        <textarea 
            disabled = {disabled()}
            id={`${name}${id}`} 
            minLength='3'
            name={`${name}`} 
            required
            value={value}
            {...options}
            onInput={(e) => setValue(e.target.value)}
            onBlur={(e) => setValue(helpers.replaceShortCodes(shortCodes, e))}
        ></textarea>
    );
}



export const VisitScheduler = ({name, id, disabled, icon, title, value, setValue, ...options}) => {

    const isRequired = () => value && (value.startTime||value.endTime);
    
    const updateEndTime = (e) => {
        if(!value || !value.endTime){
            setValue({...value, endTime: e.target.value});
        } 
    };

    return (
            <div className='visitScheduler'>
                
                <label className='visitScheduler-startTime--label'>Start Time:</label>
                <input
                    className='visitScheduler-startTime--ctrl'  
                    disabled = {disabled()}
                    id={`${name}_startTime_${id}`} 
                    name={`${name}_startTime`} 
                    required = {isRequired()}
                    step='900'
                    title='Start time'
                    type='time'
                    value={value?value.startTime:''}
                    {...options}
                    onInput={(e) => setValue({...value, endTime:e.target.value})}
                    onBlur={(e) => updateEndTime(e)}
                />
                <label className='visitScheduler-endTime--label'>End Time:</label>
                <input
                    className='visitScheduler-endTime--ctrl'  
                    disabled = {disabled()}
                    id={`${name}_endTime_${id}`} 
                    name={`${name}_endTime`} 
                    required = {isRequired()}
                    step='900'
                    title='End time'
                    type='time'
                    value={value?value.endTime:''}
                    {...options}
                    onInput={(e) => setValue({...value, endTime:e.target.value})}
                />
                <label className='visitScheduler-numberOfCarers--label'>№ Carers:</label>
                <input
                    className='visitScheduler-numberOfCarers--ctrl'
                    disabled = {disabled()}
                    id={`${name}_numberOfCarers_${id}`} 
                    name={`${name}_numberOfCarers`} 
                    required = {isRequired()}
                    step='1'
                    title='Number of carers'
                    type='number'
                    value={value?value.numberOfCarers:''}
                    min='1'
                    max='4'
                    onInput={(e) => setValue({...value, numberOfCarers:e.target.value})}
                />

                <div className='visitScheduler-summary'>
                    <label htmlFor={`${name}_startTime_${id}`}>
                        {title}<br/>
                        {value.startTime ? (
                            <>
                            {value.startTime} - {value.endTime}<br/>
                            x {value.numberOfCarers} {value.numberOfCarers === 1 ? 'carer' : 'carers'}
                            </>) :
                            ''
                        }
                    </label>
                </div>

                <label className='visitScheduler-caption'>
                    <span>{title}</span>
                </label>
            </div>
        );
    }