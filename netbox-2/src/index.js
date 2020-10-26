import React from "react";
import ReactDOM from "react-dom";
import {Provider} from "react-redux";
import {createStore, applyMiddleware, compose} from "redux";
import thunk from "redux-thunk";

import {Operation, reducer} from "./reducer/reducer.js";
import {createAPI} from "./api.js";

import App from "./components/app/app.jsx";

const api = createAPI((err) => console.log(err));

const store = createStore(
    reducer,
    compose(
        applyMiddleware(thunk.withExtraArgument(api)),
        window[`__REDUX_DEVTOOLS_EXTENSION__`] ? window[`__REDUX_DEVTOOLS_EXTENSION__`]() : (f) => f
    )
);

store.dispatch(Operation.getData());

ReactDOM.render(
    <Provider store={store}>
      <App />
    </Provider>,
    document.querySelector(`#root`)
);
