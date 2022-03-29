import React from "react";

const ProfileBio = ({user}) => {
    return (
        <div className="d-flex flex-column align-content-between wd-bio mt-5">

            <form className="form-floating wd-form mb-4">
                <input type="text" className="form-control" id="name"
                       value={`${user.first_name} ${user.last_name}`}/>
                    <label htmlFor="name">Name</label>
            </form>

            <form className="form-floating wd-form">
                <textarea className="form-control" id="bio" style={{"height": "100px"}}
                       value={`${user.biography}`}/>
                <label htmlFor="bio">Bio</label>
            </form>

        </div>
);
}

export default ProfileBio;