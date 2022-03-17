import React from "react";

const NavIcon = (item) => {
    return(
        <a href={item.icon.path} className={`list-group-item list-group-item-action ${item.active === item.icon.title ? 'active' : ''}`}>
            <i className={`fa${item.icon.type} fa-${item.icon.icon} pt-0 pb-0 ps-0 pe-1`}/>
            <span className="d-none d-xl-inline"> {item.icon.title}</span>
        </a>
    
    );
}

export default NavIcon;