import NavigationSidebar from "../NavigationSideBar/index.js";
import ExploreComponent from "./ExploreComponent.js";
import WhoToFollowList from "../WhoToFollowList/index.js";

(function ($) {
    $('#wd-explore').append(`
        <div class="row">
            <div class="col-xxl-2 col-xl-2 col-lg-1 col-md-2 col-sm-2 wd-side">
                ${NavigationSidebar()} 
            </div>
            <div class="col-xxl-6 col-xl-6 col-lg-7 col-md-10 col-sm-10 wd-main">
                ${ExploreComponent()}
            </div>
            <div class="col-xxl-4 col-xl-4 col-lg-4 d-none d-lg-block wd-side-follow">
                ${WhoToFollowList()} 
            </div>
        </div> 
    `);
})($);