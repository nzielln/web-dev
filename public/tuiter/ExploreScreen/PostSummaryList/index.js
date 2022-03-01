import posts from "./posts.js";
import PostSummaryItem from "./PostSummaryItem.js";

const PostSummaryList = () => {
    return (`
        <div class="card" style="background-color:black;">
            <div class="position-relative" >
            <img src="../images/spacex.jpeg" class="card-img-top" alt="..." >
                <div class="card-img-overlay position-absolute bottom-0 end-0 pe-0 ps-2">
                    <h4 class="wd-overlay-text position-absolute bottom-0" style="color: white; font-weight: bold">SpaceX's Starship</h4>
                </div>
            </div>
        <ul class="list-group list-group-flush pt-2" style="border: 1px solid transparent; border-radius: 3px;">
            ${
        posts.map(p => {
            return (PostSummaryItem(p));
        }).join("")
    }
        </ul>
        </div>
    `);
};
export default PostSummaryList;