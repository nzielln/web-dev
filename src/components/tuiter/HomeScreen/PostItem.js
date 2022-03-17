import React from "react";

const PostItem = (param) => {
    return(
        <li className="list-group-item pt-2 pb-2 ps-2 pe-2">
            <div className="d-flex flex-co align-items-start justify-content-start">
                <img
                src={param.post.user.avatar}
                alt="" 
                style={{"width": "50px", "height": "50px", "objectFit": "cover", "borderRadius": "50%"}} className="me-3"/>
                <div>
                    <div>
                        <div>
                        <div className="d-flex justify-content-between">
                            <p className="mb-0 wd-bookmark-author">{param.post.user.user}
                                <i className="fa-solid fa-circle-check mb-0 ps-2"/>
                                <span className="wd-handler"> {param.post.user.handler} • {param.post.user.lastactive}</span>
                            </p>
                            <i className="fas fa-ellipsis-h"/>
                        </div> 
                            <p className="wd-bookmark-paragraph"><div dangerouslySetInnerHTML={{__html: `${param.post.blurb}`}}/></p>
                        
                        </div>
                    </div>
                    
                    <div className="card">
                        <img src={param.post.post.image} className="card-img-top" alt="..."/>
                        <div className="card-body" style={{"display": `${param.post.post.content[1]}`}}>
                            <h5 className="card-title wd-title">{param.post.post.title}</h5>
                            <p className="card-text wd-bookmark-paragraph mb-0">{param.post.post.content[0]}</p>
                            <i className="fas fa-link" style={{"display": `${param.post.post.link[1]}`, "fontSize": "13px"}}/>
                            <a style={{"display": `${param.post.post.link[1]}`, "textDecoration": "none", "color": "#8d8d8d", "fontSize": "14px"}}
                               href="#"
                               className="card-link"> {param.post.post.link[0]}</a>
                        </div>
                    </div>
                    <div className="wd-stats mt-2 d-flex justify-content-between" style={{"width": "75%"}}>
                        <a href="#" className="d-flex align-items-center"><i className="fas fa-comment pe-2"/>  {param.post.stats.replies}</a>
                        <a href="#"><i className="fas fa-retweet pe-2"/>  {param.post.stats.retuits}</a>
                        <a className="wd-pink" href="#"><i className="fas fa-heart wd-pink pe-2"/>  {param.post.stats.likes}</a>
                        <a href="#"><i className="fas fa-external-link-alt"/></a>
        
                    </div>
                </div>
            </div>
        </li>
    
    )
}

export default PostItem;