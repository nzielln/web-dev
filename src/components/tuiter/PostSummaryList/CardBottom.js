import posts from "./posts.json";
import PostSummaryItem from "./PostSummaryItem.js";
import React from "react";

const CardBottom = () => {
    return (
        <ul className="list-group list-group-flush"
            style={{"border": "1px solid transparent", "borderRadius": "3px"}}>
            {
                posts.map(post => {
                    return (<PostSummaryItem post={post}/>);
                })
            }
        </ul>

    );
};
export default CardBottom;