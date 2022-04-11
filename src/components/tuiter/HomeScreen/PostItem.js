import React from "react";
import {useDispatch} from "react-redux";
import PostStats from "./PostStats";
import {deleteTuit} from "../actions/tuits-actions";


const PostItem = ({tuit}) => {
    let media;
    const img = tuit.post.image;
    const vid = tuit.post.video;
    const content = tuit.post.content[0]

    if (vid.url !== "") {
        media = <iframe width={vid.width}
                        height={vid.height}
                        style={{"border": "1px solid transparent", "borderRadius": "25px"}}
                        src={`https://www.youtube.com/embed/${vid.url}`}
                        title={vid.title}
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen/>;
    } else if (img !== "") {
        media = <img src={`/tuiter/images/${tuit.post.image}`} className={`card-img-top ${content === "" ? "round" : ""}`} alt="" />;

    } else  {
        media = "";
    }

    const dispatch = useDispatch();

    return(
        <li className="list-group-item pt-2 pb-2 ps-2 pe-2">
            <div className="d-flex flex-co align-items-start justify-content-start">
                <img
                src={`/tuiter/images/${tuit.user.avatar}`}
                alt="" 
                style={{"width": "50px", "height": "50px", "objectFit": "cover", "borderRadius": "50%"}} className="me-3"/>
                <div>
                    <div>
                        <div>
                        <div className="d-flex justify-content-between">
                            <p className="mb-0 wd-bookmark-author">{tuit.user.user}
                                <i className="fa-solid fa-circle-check mb-0 ps-2"/>
                                <span className="wd-handler"> {tuit.user.handler} {tuit.user.lastactive !== "" ? "• " + tuit.user.lastactive : ""}</span>
                            </p>
                            <button style={{"backgroundColor": "transparent", "border": "1px solid transparent"}}
                                    onClick={() => deleteTuit(dispatch, tuit)}
                            >
                                <i className="fa-solid fa-xmark" style={{"color": "white"}}/>
                            </button>
                        </div> 
                            <p className="wd-bookmark-paragraph"><div dangerouslySetInnerHTML={{__html: `${tuit.blurb}`}}/></p>
                        
                        </div>
                    </div>
                    
                    <div className="card"
                         style={{
                             "backgroundColor": `${content !== "" ? "" : "transparent"}`,
                             "border": `${content !== "" ? "" : "1px solid transparent"}`}}>
                        {media}
                        <div className="card-body" style={{"display": `${tuit.post.content[1]}`}}>
                            <h5 className="card-title wd-title">{tuit.post.title}</h5>
                            <p className="card-text wd-bookmark-paragraph mb-0">{tuit.post.content[0]}</p>
                            <i className="fas fa-link" style={{"display": `${tuit.post.link[1]}`, "fontSize": "13px"}}/>
                            <a style={{"display": `${tuit.post.link[1]}`, "textDecoration": "none", "color": "#8d8d8d", "fontSize": "14px"}}
                               href="#"
                               className="card-link"> {tuit.post.link[0]}</a>
                        </div>
                    </div>
                    <PostStats tuit={tuit}/>
                </div>
            </div>
        </li>
    
    )
}

export default PostItem;