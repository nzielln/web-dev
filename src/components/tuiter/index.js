//LIBRARIES
import {Outlet} from "react-router-dom";

//COMPONENTS
import NavigationSideBar from "./NavigationSideBar";
import WhoToFollowList from "./WhoToFollowList/WhoToFollowList";

//REDUCERS
import whoReducer from "./reducers/who-reducer";
import tuitsReducer from "./reducers/tuits-reducer";
import {createStore, combineReducers} from "redux";
import {Provider} from "react-redux";

const reducer = combineReducers({
    tuits: tuitsReducer,
    who: whoReducer
})

const store = createStore(reducer);

const Tuiter = () => {
    return (
        <Provider store={store}>
            <div className="row">
                <div className="col-xxl-2 col-xl-2 col-lg-1 col-md-2 col-sm-2 wd-side">
                    <NavigationSideBar active="Explore"/>
                </div>
                <div className="col-xxl-6 col-xl-6 col-lg-7 col-md-10 col-sm-10 wd-main">
                    <Outlet/>
                </div>
                <div className="col-xxl-4 col-xl-4 col-lg-4 d-none d-lg-block wd-side-follow">
                    <WhoToFollowList/>
                </div>
            </div>
        </Provider>
    );
};

export default Tuiter;