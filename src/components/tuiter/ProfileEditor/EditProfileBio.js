import React from "react";

const ProfileBio = (props) => {
    let user = props.user;
    let name = user.first_name + " " + user.last_name;
    const changeHandler = props.changeHandler;


    return (
        <div className="d-flex flex-column align-content-between wd-bio">

            <form className="form-floating wd-form mt-5 mb-2">
                <input type="text"
                       className="form-control" id="name"
                       value={name}
                       onChange={(event) => {
                           const value = event.target.value.split(" ");
                           let f_name, l_name;
                           if (value.length > 1) {
                               f_name = value[0];
                               l_name = value[1];
                           } else {
                               f_name = value;
                               l_name = "";
                           }

                           changeHandler({
                               ...user,
                               first_name: f_name,
                               last_name: l_name
                           });

                       }}
                />
                <label htmlFor="name">Name</label>
            </form>
            <div className="d-flex justify-content-between mb-2">
                <form className="form-floating wd-form" style={{"width": "48%"}}>
                    <input type="text" className="form-control" id="location"
                           value={user.location}
                           onChange={(event) => {
                               changeHandler({
                                   ...user,
                                   location: event.target.value
                               });

                           }}
                    />
                    <label htmlFor="location">Location</label>
                </form>

                <form className="form-floating wd-form" style={{"width": "48%"}}>
                    <input type="date" className="form-control" id="dob"
                           value={user.dob}
                           onChange={(event) => {
                               changeHandler({
                                   ...user,
                                   dob: event.target.value
                               });

                           }}/>
                    <label htmlFor="dob">Name</label>
                </form>
            </div>

            <form className="form-floating wd-form "
            >
                <textarea className="form-control" id="bio" style={{"height": "80px"}}
                          value={user.biography}
                          onChange={(event) => {
                              changeHandler({
                                  ...user,
                                  biography: event.target.value
                              });
                          }}
                />
                <label htmlFor="bio">Bio</label>
            </form>

        </div>
    );
};

export default ProfileBio;