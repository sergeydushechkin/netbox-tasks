import React from "react";
import ReactDOM from "react-dom";

import JsonData from "./mock/data.js";
import App from "./components/app/app.jsx";

const data = JSON.parse(JsonData);
console.log(data);

ReactDOM.render(
    <App data={data}/>,
    document.querySelector(`#root`)
);
