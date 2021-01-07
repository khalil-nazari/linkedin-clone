import { Avatar } from '@material-ui/core';
import React from 'react'
import './Sidebar.scss'; 


function Sidebar() {
    return (
        <div className="sidebar">
            <div className="sidebar__top">
                <img src="https://marketplace.canva.com/EAD7TRhFbfg/1/0/800w/canva-simple-work-linkedin-banner-o8RYd-hyoQI.jpg" alt=""/>
                <Avatar className="sidebar__avatar" />
                <h2>Khalil Nazari</h2>
                <h4>khalil.nazari@gmail.com</h4>
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
            </div>
        </div>
    )
}

export default Sidebar
