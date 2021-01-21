/*
    Khalil Nazari 
    7 Jan 2020
*/

import React from 'react'
import './Header.scss'; 
import SearchIcon from '@material-ui/icons/Search';
import HomeIcon from '@material-ui/icons/Home';
import BusinessCenterIcon from '@material-ui/icons/BusinessCenter';
import SupervisorAccountIcon from '@material-ui/icons/SupervisorAccount';
import MessageIcon from '@material-ui/icons/Message';
import NotificationsIcon from '@material-ui/icons/Notifications';
import HeaderOptions from './HeaderOptions';
import { auth } from '../../Firebase/Firebase';
import {logout} from '../../features/userSlice';
import {useDispatch} from 'react-redux';
import firebase from 'firebase';


function Header() {

    // var userCurr = firebase.auth().currentUser;
    // if(userCurr != null) {
    //     console.log(userCurr.photoURL)
    // }

    const dispatch = useDispatch();
    
    const logOutOfApp  = () => {
        dispatch(logout());  // redux
        auth.signOut();  // firebase
    }

    // JSX
    return (
        <div className="header">
            <div className="container">
                {/* header left */}
                <div className="header__left">
                    <img src="https://www.flaticon.com/svg/static/icons/svg/174/174857.svg" alt="Linked"/>
                    <div className="header__search">
                        <SearchIcon />
                        <input type="text" placeholder="Search"/>
                    </div>
                </div>


                {/* header right */}
                <div className="header__right">
                    <HeaderOptions Icon={HomeIcon} title="Home"/>
                    <HeaderOptions Icon={SupervisorAccountIcon} title="My Network"/>
                    <HeaderOptions Icon={BusinessCenterIcon} title="Jobs"/>
                    <HeaderOptions Icon={MessageIcon} title="Messages"/>
                    <HeaderOptions Icon={NotificationsIcon} title="Notifications"/>
                    <HeaderOptions onClick={logOutOfApp}  avatar={true} title="Me"/>
                </div>
            </div>
        </div>
    )
}

export default Header
