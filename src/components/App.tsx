import * as React from "react";
import Container from "./Container";
import {isMobile} from "../utils/Utils";

// 'HelloProps' describes the shape of props.
// State is never set so we use the 'undefined' type.


export class App extends React.Component<undefined, undefined> {
    constructor(){
        super();
    }
    render() {
        let dev = "desktop"
        if (isMobile.any()){
            dev = "mobile"
        }
        return <Container device={dev}/>;
    }
}