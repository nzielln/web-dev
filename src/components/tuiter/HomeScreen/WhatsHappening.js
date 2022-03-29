import React, {useState} from "react";
import {useDispatch} from "react-redux";
import WhatsHappeningIcons from "./WhatsHappeningIcons";

const WhatsHappening = () => {
    let [whatHappening, setWhatsHappening] = useState("What's happening?");

    const dispatch = useDispatch();

    const whatsHappeningChangeHandler = (event) => {
        const value = event.target.value;
        setWhatsHappening(value)
    }

    const whatHappeningFocusHandler = () => {
        setWhatsHappening("")
    }

    const tuitClickHandler = () => {
        dispatch({
            type: "create-tuit",
            tuit: whatHappening
        });

        setWhatsHappening("What's happening?")

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
                                onClick={tuitClickHandler}>
                            Tuit
                        </button>
                    </div>
                </div>
            </div>
        </li>

    );
};

export default WhatsHappening;
