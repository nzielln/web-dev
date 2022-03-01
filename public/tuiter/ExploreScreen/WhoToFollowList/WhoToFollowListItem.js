const WhoToFollowListItem = (who) => {
    return(`
        <li class="list-group-item d-flex align-items-center">
            <div class="wd-follow-card d-flex d-flex align-items-center justify-content-between col-12">
                <div class="wd-follow-user-card d-flex align-items-center">
                    <img src=${who.avatarIcon} alt="" class="me-4">
                    <div class="wd-follow-user">
                        <h6 class="wd-username mt-0 mb-0 ms-0 me-0">${who.userName}<i class="fa-solid fa-circle-check pt-0 pb-0 ps-1 pe-1"></i></h6>
                        <p class="wd-handler mt-0 mb-0 ms-0 me-0 pt-0 pb-0 ps-0 pe-0">@${who.handler}</p>
                    </div>
                </div>
                <button class="btn btn-primary">Follow</button>
            </div>
        </li>
    
    `)
}

export default WhoToFollowListItem