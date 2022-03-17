import React from "react";

const PostSummaryItem = (param) => {
    return(
        <li className="list-group-item pt-2 pb-2 ps-2 pe-2">
            <div className="d-flex flex-row wd-trend-card align-items-start justify-content-between">
                <div>
                    <h6 className="wd-card-heading mb-0 ps-1 pb-1">{param.post.topic}</h6>
                    <h6 className="wd-trend-title ps-1 pb-1 mb-0">{param.post.userName}
                        <i className="fa-solid fa-circle-check mb-0 ps-2"/>
                        <span className="wd-timestamp mb-0 ps-1"> - {param.post.time}</span>
                    </h6>
                    <p className="wd-trend-blurb mb-0 ps-1">{param.post.title}</p>
                    <p className="wd-tuit-count ps-1 mb-0">{param.post.tuits}</p>
                </div>
            <img className="wd-card-img ms-4 pe-1"
                 src={param.post.img}
                 style={{"width": "75px", "height": "75px", "objectFit": "cover", "borderRadius": "8px"}}
                 alt=""/>
            </div>
        </li>
    );
}

export default PostSummaryItem;