import React from "react";

const TabItem = (param) => {
    return(
        <li className="nav-item">
            <a className={`nav-link ${param.item.active}`} href={param.item.path}>{param.item.title}</a>
        </li>
    )
}

export default TabItem;