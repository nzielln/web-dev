import React from "react";
import {useSelector} from "react-redux";
import HeaderNav from "./HeaderNav";
import ProfileHeader from "./ProfileHeader";
import ProfileBio from "./ProfileBio";

const ProfileComponent = () => {
    const user = useSelector((state) => state)
    return(
        <div className="position-relative">
            <ProfileHeader user={user}/>
            <ProfileBio user={user}/>
            <img className="position-absolute top-50 start-0 translate-middle-y ms-4 mt-4"
                 src="/tuiter/images/ell.JPG"
                 style={{"width": "100px", "height": "100px", "borderRadius": "50%", "objectFit": "cover", "outline": "3px solid black"}}
                 alt=""/>

        </div>
    );
}

export default ProfileComponent;