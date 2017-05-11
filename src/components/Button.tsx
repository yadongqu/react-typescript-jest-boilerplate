import * as React from "react";

const buttonStyle = {
    width: "100%",
    padding: "10px 20px",
    background: "red",
    border: "none",
    borderRadius: "5px",
    fontSize: "20px",
    color: "white"
}


export default class Button extends React.Component<undefined, undefined> {
    render(){
        return (
            <button style={buttonStyle}>Play</button>
        )
    }
}