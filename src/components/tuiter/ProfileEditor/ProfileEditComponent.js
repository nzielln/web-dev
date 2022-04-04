import React, {useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import EditHeaderNav from "./EditHeaderNav";
import ProfileBio from "./EditProfileBio";

const ProfileEditComponent = () => {
    const user_data = useSelector((state) => state);
    let [user, setUser] = useState(user_data);
    const dispatch = useDispatch();

    const changeHandler = (_user) => {
        setUser(_user);
    };

    const submitHandler = (event) => {
        //console.log(user);
        dispatch({
            type: "update-user",
            user: user
        })

    }

    return (
        <div className="position-relative">
            <EditHeaderNav user={user} submitHandler={submitHandler}/>
            <ProfileBio user={user} changeHandler={changeHandler}/>
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

                <button className="wd-edit-button position-absolute top-50 start-50 translate-middle"><i
                    className="fa-solid fa-camera"/></button>

            </div>

        </div>
    );
};

export default ProfileEditComponent;