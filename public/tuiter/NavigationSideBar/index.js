import items from "./items.js";
import NavIcon from "./NavIcon.js";

const NavigationSidebar = () => {
    return (`
        ${
            items.map(i => {
                return(NavIcon(i))
            }).join("")
        }   
        <a href="more.html" class="list-group-item list-group-item-action wd-stack-icon">
            <span class="fa-stack wd-stack pt-0 pb-0 ps-0 pe-1">
                <i class="fa-solid fa-circle fa-stack-1x"></i>
                <i style="font-size: 8px" class="fa-solid fa-ellipsis-h fa-stack-1x fa-inverse"></i>
            </span> <span class="d-none d-xl-inline">More</span>
        </a>
        <button type="button" class="btn btn-primary mt-2 col-12" style="border-radius: 25px">Tuit</button> 
    `);
};
export default NavigationSidebar;