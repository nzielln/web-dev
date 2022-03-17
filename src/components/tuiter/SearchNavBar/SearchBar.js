import TabItem from "./TabItem.js";
import items from "./navitems.json";

const SearchBar = () => {
    return (
        <>
            <div className="wd-top-bar d-flex align-items-center justify-content-between mb-2">
                <form className="wd-search-bar form col-11">
                    <label className="d-flex align-items-center">
                        <i className="fa-solid fa-magnifying-glass form-control-feedback ps-3"/>
                        <input id="wd-search" className="form-control border-0" type="search" value="Search Tuiter"/>
                    </label>
                </form>
                <a href=""><i className="fa-solid fa-gear"/></a>
            </div>
            <ul className="nav nav-tabs mb-2">
                {
                    items.map(item => {
                        return (<TabItem item={item}/>);
                    })
                }
            </ul>
        </>
);
};
export default SearchBar;