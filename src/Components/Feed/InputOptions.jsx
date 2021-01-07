/*
    Khalil Nazari 
    7 Jan 2020
*/


import React from 'react'
import './InputOptions.scss'; 



const InputOptions = ({Icon, title, color}) => {
    return (
        <div className="inputOptions">
            <Icon style={{ color: color }} />
            <h4>{title}</h4>
        </div>
    )
}

export default InputOptions
