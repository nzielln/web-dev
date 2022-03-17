import posts from "./posts.json";
import PostSummaryItem from "./PostSummaryItem.js";
import React from "react";

const PostSummaryList = () => {
    return (
        <>
            <div className="card" style={{"backgroundColor": "black"}}>
                <div className="position-relative">
                    <img src="/tuiter/images/spacex.jpeg" className="card-img-top" alt="..."/>
                    <div className="card-img-overlay position-absolute bottom-0 end-0 pe-0 ps-2">
                        <h4 className="wd-overlay-text position-absolute bottom-0"
                            style={{"color": "white", "fontWeight": "bold"}}>SpaceX's Starship</h4>
                    </div>
                </div>
                <ul className="list-group list-group-flush pt-2"
                    style={{"border": "1px solid transparent", "borderRadius": "3px"}}>
                    {
                        posts.map(post => {
                            return (<PostSummaryItem post={post}/>);
                        })
                    }
                </ul>
            </div>
        </>
    );
};
export default PostSummaryList;