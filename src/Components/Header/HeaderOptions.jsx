import { Avatar } from '@material-ui/core';
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';
import React from 'react'
import './HeaderOptions.scss'

function HeaderOptions(props) {
    const {title, Icon, avatar} = props;


    return (
        <div className="headerOptions">
            {Icon && <Icon className="headerOptions__icon" />}
            {avatar && (
                <Avatar className="headerOptions__icon" src={avatar} />
                
            )}
            <h3 className="headerOptions__title">{title}</h3>
        </div>
    )
}

export default HeaderOptions
