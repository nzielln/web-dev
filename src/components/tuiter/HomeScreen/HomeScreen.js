import React from "react";
import NavigationSideBar from "../NavigationSideBar";
import PostList from "./index";
import CardBottom from "../PostSummaryList/CardBottom";

const HomeScreen = () => {
    return (
        <div className="row">
            <div className="col-xxl-2 col-xl-2 col-lg-1 col-md-2 col-sm-2 wd-side">
                <NavigationSideBar active="Home"/>
            </div>
            <div className="col-xxl-6 col-xl-6 col-lg-7 col-md-10 col-sm-10 wd-main">
                <PostList/>
            </div>
            <div className="col-xxl-4 col-xl-4 col-lg-4 d-none d-lg-block wd-side-follow">
                <CardBottom/>
            </div>
        </div>
    );
}

export default HomeScreen;