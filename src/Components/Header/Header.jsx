import React from 'react'
import './Header.scss'; 
import SearchIcon from '@material-ui/icons/Search';
import HomeIcon from '@material-ui/icons/Home';
import BusinessCenterIcon from '@material-ui/icons/BusinessCenter';
import SupervisorAccountIcon from '@material-ui/icons/SupervisorAccount';
import MessageIcon from '@material-ui/icons/Message';
import NotificationsIcon from '@material-ui/icons/Notifications';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import HeaderOptions from './HeaderOptions';



function Header() {
    return (
        <div className="header">
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
                <HeaderOptions avatar="https://media-exp1.licdn.com/dms/image/C5103AQGXb9l2CfVHVg/profile-displayphoto-shrink_100_100/0/1529253241743?e=1615420800&v=beta&t=f4IotkuGB7kEdjQjOZLpPCM1wyL_HzxmyItgsg4Us-U" title="Me"/>
            </div>
        </div>
    )
}

export default Header
