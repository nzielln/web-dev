import React from "react";

const PostCard = () => {
    return (
        <>
            <div className="card pb-2" style={{"backgroundColor": "black"}}>
                <div className="position-relative">
                    <img src="/tuiter/images/spacex.jpeg" className="card-img-top" alt="..."/>
                    <div className="card-img-overlay position-absolute bottom-0 end-0 pe-0 ps-2">
                        <h4 className="wd-overlay-text position-absolute bottom-0"
                            style={{"color": "white", "fontWeight": "bold"}}>SpaceX's Starship</h4>
                    </div>
                </div>
            </div>
        </>
    );
};
export default PostCard;