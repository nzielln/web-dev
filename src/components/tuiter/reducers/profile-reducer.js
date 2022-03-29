import user from "../data/user.json";

const profileReducer = (state = user, action) => {
    switch(action.type) {
        case "change-name":
            user.first_name = action.user.split(" ")[0];
            user.last_name = action.user.split(" ")[1];
            return user;
        case "change-location":
            user.location = action.location;
            return user;
        case "change-dob":
            user.dob = action.dob;
            return user;
        case "change-bio":
            user.biography = action.bio;
            return user;
        default:
            return user;

    }
}

export default profileReducer