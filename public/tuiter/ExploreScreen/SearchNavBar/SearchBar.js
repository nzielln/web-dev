import TabItem from "./TabItem.js";
import items from "./navitems.js";

const SearchBar = () => {
    return (`
        <div class="wd-top-bar d-flex align-items-center justify-content-between mb-2">
            <form class="wd-search-bar form col-11" >
                <label class="d-flex align-items-center">
                    <i class="fa-solid fa-magnifying-glass form-control-feedback ps-3"></i>
                    <input id="wd-search" class="form-control border-0" type="search" value="Search Tuiter">
                </label>
            </form>
            <a href="" ><i class="fa-solid fa-gear"></i></a>
        </div>
        <ul class="nav nav-tabs mb-2">
            ${
                items.map(i => {
                    return(TabItem(i))
                }).join("")
                }
        </ul>
    `);
};
export default SearchBar;