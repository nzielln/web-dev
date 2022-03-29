import React from "react";
import {Link} from "react-router-dom";

const ProfileBio = ({user}) => {
    return (
        <div className="d-flex flex-column align-content-between wd-bio mt-3">
            <div className="d-flex justify-content-end " style={{"width": "100%"}}>
                <Link to="/tuiter/edit-profile">
                    <button className="p-1" style={{
                        "width": "120px", "backgroundColor": "transparent", "color": "white", "border": "1px" +
                            " solid grey", "borderRadius": "15px", "fontWeight": "bold"
                    }}>Edit Profile
                    </button>
                </Link>

            </div>
            <div className="d-flex flex-column align-items-start">
                <p className="mb-0 wd-profile-username">{`${user.first_name} ${user.last_name}`}</p>
                <p className="mb-0 wd-handler-profile mb-2">@{user.handler}</p>

                <p className="mb-0 wd-bio mb-2">{user.biography}</p>

                <div className="d-flex justify-content-between wd-profile-deets mb-2" style={{"width": "85%"}}>
                    <span className="wd-profile-icon"><i className="fas fa-map-marker-alt"/> {user.location}</span>
                    <span className="wd-profile-icon"><i className="fas fa-birthday-cake"/> Born {user.dob}</span>
                    <span className="wd-profile-icon"><i className="fas fa-calendar-alt"/> Joined {user.joined}</span>
                </div>
                <div className="d-flex justify-content-between mb-2" style={{"width": "40%"}}>
                    <p className="mb-0 wd-profile-stats"><span className="pe-1">{user.stats.following}</span> Following
                    </p>
                    <p className="mb-0 wd-profile-stats"><span className="pe-1">{user.stats.followers}</span> Followers
                    </p>
                </div>
            </div>
        </div>
    );
};

export default ProfileBio;