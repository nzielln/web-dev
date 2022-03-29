import React from "react";
import {createStore} from "redux";
import {Provider} from "react-redux";
import profileReducer from "../reducers/profile-reducer";
import '../../../App.css';
import ProfileEditComponent from "./ProfileEditComponent";

const profile_store = createStore(profileReducer);

const ProfileEditor = () => {
    return (
        <Provider store={profile_store}>
            <div className="row">
                <ProfileEditComponent/>
            </div>
        </Provider>
    );
};

export default ProfileEditor;