import React from "react";
import {useDispatch} from "react-redux";

const PostStats = ({tuit}) => {
    const dispatch = useDispatch();

    const likeHandler = () => {
        dispatch({
            type: "like-tuit", tuit
        });
    }

    const retuitHandler = () => {
        dispatch({
            type: "re-tuit", tuit
        });
    }

    const commentHandler = () => {
        dispatch({
            type: "comment-tuit", tuit
        });
    }

    const shareHandler = () => {
        dispatch({
            type: "share-tuit", tuit
        });
    }

    return (
        <div className="wd-stats mt-2 d-flex justify-content-between" style={{"width": "75%"}}>
            <button style={{"backgroundColor": "transparent", "border": "1px solid transparent"}}
                    onClick={commentHandler}>
                <span><i className="fas fa-comment pe-2"/> {tuit.stats.replies} </span>
            </button>
            <button style={{"backgroundColor": "transparent", "border": "1px solid transparent"}}
                    onClick={retuitHandler}>
                <span><i className="fas fa-retweet pe-2"/> {tuit.stats.retuits}</span>
            </button>
            <button style={{"backgroundColor": "transparent", "border": "1px solid transparent"}}
                    onClick={likeHandler}>
                <span className="wd-pink">{tuit.stats.liked? <i className="fas fa-heart pe-2" style={{"color": "#f33853"}}/> : <i className="fas fa-heart pe-2"/>} {tuit.stats.likes}</span>
            </button>
            <button style={{"backgroundColor": "transparent", "border": "1px solid transparent"}}
                    onClick={shareHandler}>
                <span><i className="fas fa-external-link-alt"/></span>
            </button>
        </div>
    );
};

export default PostStats;