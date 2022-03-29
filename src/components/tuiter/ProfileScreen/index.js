import React from "react";
import {createStore} from "redux";
import {Provider} from "react-redux";
import profileReducer from "../reducers/profile-reducer";
import ProfileComponent from "./ProfileComponent";
import '../../../App.css';

const profile_store = createStore(profileReducer);

const ProfileScreen = () => {
    return (
        <Provider store={profile_store}>
            <div className="row">
                <ProfileComponent/>
            </div>
        </Provider>
    );
};

export default ProfileScreen;