import { Avatar } from '@material-ui/core';
import React from 'react'
import './Sidebar.scss'; 
import { useSelector } from 'react-redux'
import { selectUser } from '../../features/userSlice';


function Sidebar() {
    const user = useSelector(selectUser); 


    // Print Tags
    const recentItem = (topic) => (
        <div className="sidebar_recentItem">
            <span className="sidebar_hash">#</span>
            <p>{topic}</p>
        </div>
    ); 

    // JSX 
    return (
        <div className="sidebar">
            <div className="sidebar__top">
                <img src="https://marketplace.canva.com/EAD7TRhFbfg/1/0/800w/canva-simple-work-linkedin-banner-o8RYd-hyoQI.jpg" alt=""/>
                <Avatar src={user.photoURL} className="sidebar__avatar">{user.email[0]}</Avatar>
                <h2>{user.displayName}</h2>
                <h4>{user.email}</h4>
            </div>


            {/* Sidebar Status */}
            <div className="sidebar_stats">
                <div className="sidebar_stat">
                    <p className="">Who Viewed You</p>
                    <p className="sidebar_statNumber">2,343</p>
                </div>
                <div className="sidebar_stat">
                    <p className="">Viwes on post</p>
                    <p className="sidebar_statNumber">2,343</p>
                </div>
            </div>



            {/* Sidebar Bottom */}
            <div className="sidebar__bottom">
                <p>Recent</p>
                {recentItem('reactjs')}
                {recentItem('programming')}
                {recentItem('softwareengineering')}
                {recentItem('programming')}
                {recentItem('web dev')}
            </div>
        </div>
    )
}

export default Sidebar
