import PostItem from "./PostItem.js";
import {useDispatch, useSelector} from "react-redux";
import WhatsHappening from "./WhatsHappening";
import * as service from "/tuit-service";
import {useEffect} from "react";

const HomeScreen = () => {
    const tuits = useSelector(
        state => state.tuits
    );

    const dispatch = useDispatch();

    const findAllTuits = async () => {
        const tuits = await service.findAllTuits();
        dispatch({
            type: "FIND_ALL_TUITS",
            tuits: tuits
        });
    };

    useEffect(findAllTuits, []);

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