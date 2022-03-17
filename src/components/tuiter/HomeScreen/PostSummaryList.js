import React from "react";
import posts from "./posts.json";
import PostSummaryItem from "../PostSummaryList/PostSummaryItem";

const PostSummaryList = () => {
    return (

        <ul className="list-group list-group-flush" style={{"border": "1px solid transparent", "borderRadius": "3px"}}>
            {
                posts.map(post => {
                    return (<PostSummaryItem post={post}/>);
                })
            }
        </ul>
    );
};
export default PostSummaryList;