import React, {useState} from "react";
import {useDispatch} from "react-redux";

const ProfileBio = ({user}) => {
    let [name, setName] = useState(user.first_name + " " + user.last_name);
    let [location, setLocation] = useState(user.location);
    let [bio, setBio] = useState(user.biography);
    let [date, setDate] = useState(user.dob);

    const dispatch = useDispatch();

    const nameChangeHandler = (event) => {
        const value = event.target.value;
        setName(value);
    }

    const nameFocusHandler = (event) => {
        setName("");
    }

    const locationChangeHandler = (event) => {
        const value = event.target.value;
        setLocation(value);
    }

    const locationFocusHandler = (event) => {
        setLocation("");
    }

    const bioChangeHandler = (event) => {
        const value = event.target.value;
        setBio(value);
    }

    const bioFocusHandler = (event) => {
        setBio("");
    }

    const dateChangeHandler = (event) => {
        const value = event.target.value;
        setDate(value);
    }

    const dateFocusHandler = (event) => {
        setDate("");
    }

    const nameSubmitHandler = (event) => {
        event.preventDefault();
        dispatch({
            type: "change-name", user: name
        })
      setName(name);
    }

    const locationSubmitHandler = (event) => {
        event.preventDefault();
        dispatch({
            type: "change-location", location: location
        })
        setLocation(location);
    }

    const bioSubmitHandler = (event) => {
        event.preventDefault();
        dispatch({
            type: "change-bio", bio: bio
        })
        setBio(bio);
    }

    const dateSubmitHandler = (event) => {
        event.preventDefault();
        dispatch({
            type: "change-dob", date: date
        })
        setDate(date);
    }

    return (
        <div className="d-flex flex-column align-content-between wd-bio">

            <form className="form-floating wd-form mt-5 mb-2"
                  onSubmit={nameSubmitHandler}
            >
                <input type="text"
                       className="form-control" id="name"
                       value={name}
                       onChange={nameChangeHandler}
                       onFocus={nameFocusHandler}

                />
                <label htmlFor="name">Name</label>
            </form>
            <div className="d-flex justify-content-between mb-2">
                <form className="form-floating wd-form" style={{"width": "48%"}}
                      onSubmit={locationSubmitHandler}
                >
                    <input type="text" className="form-control" id="location"
                           value={location}
                           onChange={locationChangeHandler}
                           onFocus={locationFocusHandler}
                    />
                    <label htmlFor="location">Location</label>
                </form>

                <form className="form-floating wd-form" style={{"width": "48%"}}
                      onSubmit={dateSubmitHandler}
                >
                    <input type="date" className="form-control" id="dob"
                           value={date}
                           onChange={dateChangeHandler}
                           onFocus={dateFocusHandler}
                    />
                    <label htmlFor="dob">Name</label>
                </form>
            </div>

            <form className="form-floating wd-form "
                  onSubmit={bioSubmitHandler}
            >
                <textarea className="form-control" id="bio" style={{"height": "80px"}}
                          value={bio}
                          onChange={bioChangeHandler}
                          onFocus={bioFocusHandler}
                />
                <label htmlFor="bio">Bio</label>
            </form>

        </div>
    );
};

export default ProfileBio;