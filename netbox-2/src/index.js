import React from "react";
import ReactDOM from "react-dom";

import data from "./mock/data.js";
import App from "./components/app/app.jsx";

ReactDOM.render(
    <App data={data}/>,
    document.querySelector(`#root`)
);
