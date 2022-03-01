import posts from "../ExploreScreen/PostSummaryList/posts.js";
import PostSummaryItem from "../ExploreScreen/PostSummaryList/PostSummaryItem.js";


const PostSummaryList = () => {
    return (`
      
        <ul class="list-group list-group-flush" style="border: 1px solid transparent; border-radius: 3px;">
            ${
        posts.map(p => {
            return (PostSummaryItem(p));
        }).join("")
    }
        </ul>
    `);
};
export default PostSummaryList;