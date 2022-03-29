import React from "react";

const WhoToFollowListItem = ({who}) => {
    return(
        <li className="list-group-item d-flex align-items-center">
            <div className="wd-follow-card d-flex d-flex align-items-center justify-content-between col-12">
                <div className="wd-follow-user-card d-flex align-items-center">
                    <img src={who.avatarIcon} alt="" className="me-4"/>
                    <div className="wd-follow-user">
                        <h6 className="wd-username mt-0 mb-0 ms-0 me-0">
                            {who.userName}
                            <i className="fa-solid fa-circle-check pt-0 pb-0 ps-1 pe-1"/>
                        </h6>
                        <p className="wd-handler mt-0 mb-0 ms-0 me-0 pt-0 pb-0 ps-0 pe-0">@{who.handler}</p>
                    </div>
                </div>
                <button className="btn btn-primary">Follow</button>
            </div>
        </li>
    );
};

export default WhoToFollowListItem