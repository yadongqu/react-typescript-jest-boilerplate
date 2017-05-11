import * as React from "react";
import * as ReactDOM from "react-dom";

import { App } from "./components/App";

console.log(window);

ReactDOM.render(
    <App compiler="TypeScript" framework="React" />,
    document.getElementById("example")
);