import posts from "./posts.js";
import PostItem from "./PostItem.js";
import SearchBar from "../ExploreScreen/SearchNavBar/SearchBar.js";


const PostList = () => {
    return (`
        ${SearchBar()}
        <ul class="list-group list-group-flush wd-post-list">
            ${
        posts.map(p => {
            return (PostItem(p));
        }).join("")
    }
        </ul>
    `);
}

export default PostList;