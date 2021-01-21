/*
    Khalil Nazari 
    7 Jan 2020
*/


import React from 'react'
import { useDispatch } from 'react-redux';
import './InputOptions.scss'; 


const InputOptions = ({Icon, title, color}) => {
    const dispatch = useDispatch(); 
    return (
        <div className="inputOptions">
            <Icon style={{ color: color }} />
            <h4>{title}</h4>
        </div>
    )
}

export default InputOptions
