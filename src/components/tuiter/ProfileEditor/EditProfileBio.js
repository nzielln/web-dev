import React from "react";

const ProfileBio = ({user}) => {
    return (
        <div className="d-flex flex-column align-content-between wd-bio">

            <form className="form-floating wd-form mt-5 mb-2">
                <input type="text" className="form-control" id="name"
                       placeholder={`${user.first_name} ${user.last_name}`}/>
                <label htmlFor="name">Name</label>
            </form>
            <div className="d-flex justify-content-between mb-2">
                <form className="form-floating wd-form" style={{"width": "45%"}}>
                    <input type="text" className="form-control" id="location"
                           placeholder={`${user.location}`}/>
                    <label htmlFor="location">Location</label>
                </form>

                <form className="form-floating wd-form" style={{"width": "45%"}}>
                    <input type="date" className="form-control" id="dob"
                           placeholder={`${user.dob}`}/>
                    <label htmlFor="dob">Name</label>
                </form>
            </div>

            <form className="form-floating wd-form ">
                <textarea className="form-control" id="bio" style={{"height": "80px"}}
                          placeholder={`${user.biography}`}/>
                <label htmlFor="bio">Bio</label>
            </form>

        </div>
    );
};

export default ProfileBio;