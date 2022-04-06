import PostItem from "./PostItem.js";
import {useDispatch, useSelector} from "react-redux";
import WhatsHappening from "./WhatsHappening";
import React, {useEffect} from "react";
import {findAllTuits} from "../actions/tuits-actions";

const HomeScreen = () => {
    const tuits = useSelector(
        state => state.tuits
    );

    const dispatch = useDispatch();

    useEffect(() => findAllTuits(dispatch), []);

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