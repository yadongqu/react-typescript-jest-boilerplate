import * as React from "react";

const infoStyle = {
    padding: "10px 20px",
    background: "red",
    border: "none",
    borderRadius: "5px",
    fontSize: "20px",
    color: "white",
    textAlign: "center",
}


export default class InfoBox extends React.Component<undefined, undefined> {
    render(){
        return (
            <div style={infoStyle}>Play</div>
        )
    }
}