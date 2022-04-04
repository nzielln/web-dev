import React from "react";
import {Link} from "react-router-dom";

const EditHeaderNav = (props) => {
    const clickHandler = props.submitHandler

    return (
        <>
            <div className="d-flex align-items-center mb-2">
                <Link to="/tuiter/profile" className="wd-link-nostyle"><i className="fa-solid fa-xmark pe-5"/></Link>
                <div className="pb-0 pt-0 d-flex align-items-center justify-content-between" style={{"width": "100%"}}>
                    <p className="mb-0 wd-profile-username">Edit Profile</p>
                    <Link to="/tuiter/profile">
                        <button className="p-1"
                                style={{"width": "75px", "backgroundColor": "white", "color": "black", "border": "1px" +
                                " solid transparent", "borderRadius": "25px", "fontWeight": "bold"}}
                                onClick={clickHandler}
                        >Save
                        </button>
                    </Link>
                </div>

            </div>
            <div className="position-relative">
                <img src="/tuiter/images/tea.jpeg" className="pb-3 wd-header-image wd-fade" alt=""
                     style={{"height": "300px", "width": "100%", "objectFit": "cover"}}/>
                <div className="position-absolute top-50 start-50 translate-middle">
                    <button className="wd-edit-button"><i className="fa-solid fa-camera"/></button>
                    <button className="wd-edit-button"><i className="fa-solid fa-xmark"/></button>
                </div>
            </div>
        </>
    );

};

export default EditHeaderNav;