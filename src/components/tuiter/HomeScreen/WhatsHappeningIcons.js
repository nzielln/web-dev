import React from "react";

const WhatsHappeningIcons = () => {
    return (
        <div className="d-flex align-items-center justify-content-between"
             style={{"borderRadius": "25px", "width": "25%"}}>
            <i className="fa-solid fa-image wd-text-icon"/>
            <i className="fa-solid fa-chart-line wd-text-icon"/>
            <i className="fa-regular fa-face-smile wd-text-icon"/>
            <i className="fa-regular fa-calendar wd-text-icon"/>
        </div>

    );
};

export default WhatsHappeningIcons;