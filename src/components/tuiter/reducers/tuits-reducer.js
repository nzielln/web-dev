import tuits from "../data/posts.json"

const tuitsReducer = (state = tuits, action) => {
    switch (action.type) {
        case "create-tuit":
            const newtuit = {
                    _id: (new Date()).getTime() + "",
                    user: {
                        avatar: "/tuiter/images/alice.jpeg",
                        user: "ReactJS", "handler": "@ReactJS",
                        lastactive: ""
                    },
                    blurb: action.tuit,
                    post: {
                        image: "/tuiter/images/tea.jpeg",
                        video: "",
                        title: "",
                        content: ["", "none"],
                        link: ["", "none"]
                    },
                    stats: {
                        replies: "111",
                        retuits: "222",
                        likes:"333"
                    }
                }
                return [newtuit, ...state,];
        case "delete-tuit":
            return state.filter(tuit => tuit._id !== action.tuit._id);
        case "like-tuit":
            return state.map(tuit => {
                if(tuit._id === action.tuit._id) {
                    if (tuit.stats.liked === true) {
                        tuit.stats.liked = false;
                        tuit.stats.likes--;
                    } else {
                        tuit.stats.liked = true;
                        tuit.stats.likes++;
                    }
                    return tuit;
                } else {
                    return tuit;
                }
            })
        case "share-tuit":
            return tuits;
        case "comment-tuit":
            return tuits;
        case "re-tuit":
            return tuits;
        default:
            return tuits;
    }
}

export default tuitsReducer;