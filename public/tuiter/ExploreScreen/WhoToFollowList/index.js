import who from "./who.js"
import WhoToFollowListItem from "./WhoToFollowListItem.js";

const WhoToFollowList = () => {
    return (`
        <ul class="list-group">
            <li class="list-group-item wd-follow-header" ><h6 class="mt-0 mb-0 ms-0 me-0 pt-0 pb-0 ps-0 pe-0">Who to follow</h6></li>

            ${
                who.map(w => {
                    return (WhoToFollowListItem(w));
                }).join("")
            }
        </ul>
    `);
};
export default WhoToFollowList;