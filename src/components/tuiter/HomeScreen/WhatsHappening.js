import React, {useState} from "react";
import {useDispatch} from "react-redux";
import WhatsHappeningIcons from "./WhatsHappeningIcons";
import {createTuit} from "../actions/tuits-actions";

const WhatsHappening = () => {
    let [whatHappening, setWhatsHappening] = useState("What's happening?");

    const dispatch = useDispatch();

    const whatsHappeningChangeHandler = (event) => {
        const value = event.target.value;
        setWhatsHappening(value);
    };

    const whatHappeningFocusHandler = () => {
        setWhatsHappening("");
    };

    const new_tuit = (tuit_blurb) => {
        setWhatsHappening("What's happening?")
        return {
            user: {
                avatar: "alice.jpeg",
                user: "ReactJS", "handler": "@ReactJS",
                lastactive: ""
            },
            blurb: tuit_blurb,
            post: {
                image: "tea.jpeg",
                video: {
                    width: "",
                    height: "",
                    url: "",
                    title: ""
                },
                title: "",
                content: ["", "none"],
                link: ["", "none"]
            },
            stats: {
                replies: 331,
                retuits: 24,
                likes: 52,
                liked: true
            },
            likes: 0
        };
    };

    return (
        <li className="list-group-item pt-2 pb-3 ps-2 pe-2" style={{
            "backgroundColor": "transparent", "border": "1px solid transparent"
        }}>
            <div className="d-flex flex-co align-items-start justify-content-start">
                <img
                    src="/tuiter/images/elon.webp"
                    alt=""
                    style={{"width": "50px", "height": "50px", "objectFit": "cover", "borderRadius": "50%"}}
                    className="me-3"/>

                <div style={{"width": "100%", "backgroundColor": "transparent"}}>
                    <textarea className="form-control"
                              style={{"width": "100%", "backgroundColor": "transparent", "color": "gray"}}
                              value={whatHappening}
                              onChange={whatsHappeningChangeHandler}
                              onFocus={whatHappeningFocusHandler}
                    />
                    <hr style={{"border": ".75px solid gray"}}/>

                    <div className="d-flex align-items-center justify-content-between">
                        <WhatsHappeningIcons/>
                        <button type="button"
                                className="btn btn-primary mt-2 col-12"
                                style={{"borderRadius": "25px", "width": "100px"}}
                                onClick={() => createTuit(dispatch, new_tuit(whatHappening))}>
                            Tuit
                        </button>
                    </div>
                </div>
            </div>
        </li>

    );
};

export default WhatsHappening;
