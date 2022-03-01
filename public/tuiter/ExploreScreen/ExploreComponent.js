import SearchBar from "../SearchNavBar/SearchBar.js";
import PostSummaryList from "../PostSummaryList/index.js";

const ExploreComponent = () => {
    return (`
        ${SearchBar()}
        ${PostSummaryList()}
       `);
};
export default ExploreComponent;