import React from "react";
import {useSelector} from "react-redux";
import EditHeaderNav from "./EditHeaderNav";
import EditProfileHeader from "./EditProfileHeader";
import ProfileBio from "./EditProfileBio";

const ProfileEditComponent = () => {
    const user = useSelector((state) => state);
    return (
        <div className="position-relative">
            <EditProfileHeader user={user}/>
            <ProfileBio user={user}/>
            <div className="position-absolute top-50 start-0 translate-middle-y ms-4 mt-4">
                <img className="position-relative"
                     src="/tuiter/images/ell.JPG"
                     style={{
                         "width": "100px",
                         "height": "100px",
                         "borderRadius": "50%",
                         "objectFit": "cover",
                         "outline": "3px solid black"
                     }}
                     alt=""/>

                <button className="wd-edit-button position-absolute top-50 start-50 translate-middle"><i className="fa-solid fa-camera"/></button>

            </div>

        </div>
    );
};

export default ProfileEditComponent;