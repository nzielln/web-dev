import items from "./items.json";
import NavIcon from "./NavIcon.js";
import React from "react";

const NavigationSidebar = ({active = 'Explore'}) => {
    return (
        <>
            {
                items.map(item => {
                    return (<NavIcon icon={item} active={active}/>);
                })
            }

            <a href="more.html" className="list-group-item list-group-item-action wd-stack-icon">
                <span className="fa-stack wd-stack pt-0 pb-0 ps-0 pe-1">
                    <i className="fa-solid fa-circle fa-stack-1x"/>
                    <i style={{"fontSize": "8px"}} className="fa-solid fa-ellipsis-h fa-stack-1x fa-inverse"/>
                </span>
                <span className="d-none d-xl-inline"> More</span>
            </a>
            <button type="button" className="btn btn-primary mt-2 col-12" style={{"borderRadius": "25px"}}>Tuit</button>
        </>
    );
};


export default NavigationSidebar;