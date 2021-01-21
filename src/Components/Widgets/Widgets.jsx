import React from 'react'
import './Widgets.scss';
import InfoIcon from '@material-ui/icons/Info'; 
import FiberManualRecordIcon from '@material-ui/icons/FiberManualRecord';

const Widgets = () => {
    const newsArticles = (headline, subtitle) => {
        return (
            <div className="widgets__article">
                <div className="widgets__articleLeft">
                    <FiberManualRecordIcon />
                </div>
                <div className="widgets__articleRight">
                    <h4>{headline}</h4>
                    <p>{subtitle}</p>
                </div>
            </div>
        )
    }


    return (
        <div className="widgets">
            <div className="widgets__header">
                <h2>Linkedin News</h2>
                <InfoIcon />
            </div>

            {newsArticles("React DOM", "900-readers")}
            {newsArticles("React DOM", "900-readers")}
            {newsArticles("React DOM", "900-readers")}
            {newsArticles("React DOM", "900-readers")}

        </div>
    )
}

export default Widgets
