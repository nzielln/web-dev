import React from "react";
import {Link} from "react-router-dom";

const NavIcon = (item) => {
    let page = item.icon.title.toLowerCase();


    return(
        <Link to={`/tuiter/${page === "home" ? "" : page}`}
              className={`list-group-item list-group-item-action ${item.active === item.icon.title ? 'active' : ''}`}>
            <i className={`fa${item.icon.type} fa-${item.icon.icon} pt-0 pb-0 ps-0 pe-1`}/>
            <span className="d-none d-xl-inline"> {item.icon.title}</span>
        </Link>
    );
}

export default NavIcon;