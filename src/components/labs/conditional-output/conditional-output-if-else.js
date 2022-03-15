import React from "react";

const ConditionalOutputIfElse = () => {
    const loggedIn = false;
    if (loggedIn) {
        return (
            <h2>Welcome If Else</h2>
        );
    } else {
        return (
            <h2>Please Login If Else</h2>
        );
    }
}

export default ConditionalOutputIfElse;