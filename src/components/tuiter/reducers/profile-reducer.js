import user from "../data/user.json";

const profileReducer = (state = user, action) => {
    switch (action.type) {
        case "update-user":
            user.first_name = action.user.first_name;
            user.last_name = action.user.last_name;
            user.location = action.user.location;
            user.dob = action.user.dob;
            user.biography = action.user.biography;
            return user;
        default:
            return user;

    }
};

export default profileReducer;