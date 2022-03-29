import PostItem from "./PostItem.js";
import {useSelector} from "react-redux";
import WhatsHappening from "./WhatsHappening";
const HomeScreen = () => {
    const tuits = useSelector(
        state => state.tuits
    );

    return (
        <>
            <WhatsHappening/>
            <ul className="list-group list-group-flush wd-post-list">
                {
                    tuits.map && tuits.map(tuit => {
                        return (<PostItem key={tuit._id}
                                          tuit={tuit}/>);
                    })
                }
            </ul>
        </>
    );
};

export default HomeScreen;