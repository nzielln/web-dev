import React from "react";
import WhoToFollowListItem from "./WhoToFollowListItem.js";
import {useSelector} from "react-redux";

const WhoToFollowList = () => {
    const who = useSelector((state) => state.who);
    return (
        <ul className="list-group">
            <li className="list-group-item wd-follow-header"><h6 className="mt-0 mb-0 ms-0 me-0 pt-0 pb-0 ps-0 pe-0">Who
                to follow</h6></li>

            {
                who.map(who => {
                    return (<WhoToFollowListItem who={who}/>);
                })
            }
        </ul>
    );
};
export default WhoToFollowList;