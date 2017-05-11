import * as React from "react";

const logoStyle = {
    width: "300px",
    height: "300px"
}

export default class Logo extends React.Component<undefined, undefined> {
    render(){
        return <img style={logoStyle} src="/dist/assets/logo.png" />
    }
}