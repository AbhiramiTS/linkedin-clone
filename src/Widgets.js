import React from 'react'
import './Widgets.css'
import InfoIcon from "@material-ui/icons/Info";
import FiberManualRecordIcon from "@material-ui/icons/FiberManualRecord";

function Widgets() {

    const newsArticle = (heading, subtitle) => (
        <div className="widgets__article">
            <div className="widgets__articleLeft">
                <FiberManualRecordIcon />
            </div>
            <div className="widgets__articleRight">
            <h4>{heading}</h4>
            <p>{subtitle}</p>
            </div>
        </div>
    )

    return (
        <div className="widgets">
            <div className="widgets__header">
                <h2>LinkedIn News</h2>
                <InfoIcon />
            </div>
            {newsArticle("Lorem ipsum dolor sit amet.","Top news - 9999 readers")}
            {newsArticle("consectetur adipiscing elit.","Top news - 8542 readers")}
            {newsArticle("Maecenas a leo quis mauris bibendum vestibulum.","Code - 3553 readers")}
            {newsArticle("Fusce a ullamcorper elit.","Crypto - 232 readers")}
            {newsArticle("Pellentesque porttitor lobortis rhoncus. ","Top news - 755 readers")}
            {newsArticle("Interdum et malesuada primis in faucibus.","Top news - 5785 readers")}
        </div>
    )
}

export default Widgets
