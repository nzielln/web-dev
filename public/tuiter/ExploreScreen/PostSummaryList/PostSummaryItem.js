
const PostSummaryItem = (post) => {
    return(`
        <li class="list-group-item pt-2 pb-2 ps-2 pe-2">
            <div class="d-flex flex-row wd-trend-card align-items-start justify-content-between">
                <div>
                    <h6 class="wd-card-heading mb-0 ps-1 pb-1">${post.topic}</h6>
                    <h6 class="wd-trend-title ps-1 pb-1 mb-0">${post.userName}<i class="fa-solid fa-circle-check mb-0 ps-2"></i> <span class="wd-timestamp mb-0 ps-1"> - ${post.time}</span></h6>
                    <p class="wd-trend-blurb mb-0 ps-1">${post.title}</p>
                    <p class="wd-tuit-count ps-1 mb-0">${post.tuits}</p>
                </div>
            <img class="wd-card-img ms-4 pe-1" src="${post.img}" style="width: 75px; height:75px; object-fit: cover; border-radius: 8px">
            </div>
        </li>
    
    `)
}

export default PostSummaryItem