import React from "react";
import {Link} from "react-router-dom";

const HeaderNav = ({user}) => {

    return (
        <>
        <div className="d-flex align-items-center pb-1">
            <Link to="/tuiter" className="wd-link-nostyle"><i className="fas fa-arrow-left pe-5"/></Link>
            <div className="pb-0 pt-0">
                <p className="mb-0 wd-profile-username">{`${user.first_name} ${user.last_name}`}</p>
                <p className="mb-0 wd-header-tuits">{user.stats.tuits} Tuits</p>
            </div>

        </div>
            <img src="/tuiter/images/tea.jpeg" className="pb-3" alt="" style={{"height": "300px", "width": "100%", "objectFit": "cover"}}/>
        </>
    );

}

export default HeaderNav;