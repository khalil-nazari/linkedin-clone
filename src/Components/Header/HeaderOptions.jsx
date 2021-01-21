
import React, {useState} from 'react'
import './HeaderOptions.scss'
import {useSelector} from 'react-redux';
import {selectUser} from '../../features/userSlice';
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';
import { Avatar } from '@material-ui/core';



function HeaderOptions(props) {

    const {title, Icon, avatar, onClick} = props;
    const user = useSelector(selectUser)
    const [displayUserDetail, setDisplayUserDetail] = useState('none')

    const userDetail = (e) => {
        if(displayUserDetail == 'none'){
            setDisplayUserDetail('block')
        } else {
            setDisplayUserDetail('none')
        }
    }



    return (
        <div className="headerOptions">
            {Icon && <Icon className="headerOptions__icon" />}
            {avatar && (
                <Avatar className="headerOptions__icon" src={user?.photoURL}>{user?.email[0]}</Avatar>   
            )}
            {!avatar && <h3 className="headerOptions__title">{title}</h3>}
            
            {avatar && (
                <div className="headerOptions__user_btn" onClick={userDetail}>
                    <h3 className="headerOptions__title">{title}</h3>
                    <ArrowDropDownIcon />
                </div>
            )}

            {avatar && (
                <div className="headerOptions__user_detail" style={{display:displayUserDetail}}>
                    <h3>Profile</h3>
                    <h3 onClick={onClick, userDetail}>Logout</h3>
                </div>
            )}  
        </div>
    )
}

export default HeaderOptions
