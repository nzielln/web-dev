//REACT AND REDUX
import React from "react";
import {combineReducers, createStore} from "redux";
import {Provider} from "react-redux";

//COMPONENTS
import HelloReduxExampleComponent from "./hello-redux-example-component";
import Todos from "./todos-component";

//DATA AND REDUCERS
import hello from "./reducer/hello";
import todos from "./reducer/todos-reducer"

//STORES
const reducers = combineReducers({hello, todos})
const store = createStore(reducers);

const ReduxExamples = () => {
    return (
        <Provider store={store}>
            <>
                <h2>Redux Example</h2>
                <HelloReduxExampleComponent/>
                <Todos/>
            </>
        </Provider>

    );
};

export default ReduxExamples;