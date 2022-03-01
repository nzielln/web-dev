
const PostItem = (p) => {
    return(`
        <li class="list-group-item pt-2 pb-2 ps-2 pe-2">
            <div class="d-flex flex-co align-items-start justify-content-start">
                <img 
                src=${p.user.avatar} 
                alt="" 
                style="width: 50px; height: 50px; object-fit: cover; border-radius: 50%" class="me-3">
                <div>
                    <div>
                        <div>
                        <div class="d-flex justify-content-between">
                            <p class="mb-0 wd-bookmark-author">${p.user.user}<i class="fa-solid fa-circle-check mb-0 ps-2"></i> <span class="wd-handler">${p.user.handler} • ${p.user.lastactive}</span></p>
                            <i class="fas fa-ellipsis-h"></i>
                        </div> 
                            <p class="wd-bookmark-paragraph">${p.blurb}</p>
                        
                        </div>
                    </div>
                    
                    <div class="card">
                        <img src=${p.post.image} class="card-img-top" alt="...">
                        <div class="card-body" style="display: ${p.post.content[1]}">
                            <h5 class="card-title wd-title">${p.post.title}</h5>
                            <p class="card-text wd-bookmark-paragraph mb-0">${p.post.content[0]}</p>
                            <i class="fas fa-link" style="display: ${p.post.link[1]}; font-size: 13px;"></i> <a style="display: ${p.post.link[1]}; text-decoration: none; color: #8d8d8d; font-size: 14px;" href="#" class="card-link">${p.post.link[0]}</a>
                        </div>
                    </div>
                    <div class="wd-stats mt-2 d-flex justify-content-between" style="width: 75%;">
                        <a href="#" class="d-flex align-items-center"><i class="fas fa-comment pe-2"></i>  ${p.stats.replies}</a>
                        <a href="#"><i class="fas fa-retweet pe-2"></i>  ${p.stats.retuits}</a>
                        <a class="wd-pink" href="#"><i class="fas fa-heart wd-pink pe-2"></i>  ${p.stats.likes}</a>
                        <a href="#"><i class="fas fa-external-link-alt"></i></a>
        
                    </div>
                </div>
            </div>
        </li>
    
    `)
}

export default PostItem;