import posts from "./posts.json";
import PostItem from "./PostItem.js";
import SearchBar from "../SearchNavBar/SearchBar";

const PostList = () => {
    return (
        <>
            <SearchBar/>
            <ul className="list-group list-group-flush wd-post-list">
                {
                    posts.map(post => {
                        return (<PostItem post={post}/>);
                    })
                }
            </ul>
        </>
    );
};

export default PostList;