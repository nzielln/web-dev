import NavigationSidebar from "../ExploreScreen/NavigationSideBar/index.js";
import PostSummaryList from "./PostSummaryList.js";
import PostList from "./index.js";

(function ($) {
    $('#wd-explore').append(`
        <div class="row">
            <div class="col-xxl-2 col-xl-2 col-lg-1 col-md-2 col-sm-2 wd-side">
                ${NavigationSidebar("Home")} 
            </div>
            <div class="col-xxl-6 col-xl-6 col-lg-7 col-md-10 col-sm-10 wd-main">
                ${PostList()} 
            </div>
            <div class="col-xxl-4 col-xl-4 col-lg-4 d-none d-lg-block wd-side-follow">
                ${PostSummaryList()} 
            </div>
        </div> 
    `);
})($);