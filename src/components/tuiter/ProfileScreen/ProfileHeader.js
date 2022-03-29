import React from "react";
import HeaderNav from "./HeaderNav";

const ProfileHeader = ({user}) => {
    return(
        <>
            <HeaderNav user={user}/>
        </>
    );
}

export default ProfileHeader;