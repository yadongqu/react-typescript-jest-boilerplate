import * as React from "react";
import Button from "./Button";
import InfoBox from "./InfoBox";
import Logo from "./Logo";

var containerStyle = {
    margin: "100px auto",
    width: "900px",
    height: "600px",
    backgroundImage: "url(/dist/assets/background.jpg)",
    padding: "50px 50px",
    display: "flex"
};

// var bottomStyle = {
//     position: "absolute",
//     bottom: "20px"
// };

var leftContainerStyle = {
    width: "50%",
    border: "1px solid black"
}

var rightContainerStyle = {
    width: "50%",
    border: "1px solid black"
}

var buttonStyle = {
    marginTop: "230px",
}
var canvasStyle = {
    width: "100%",
    height: "400px"
}

var infoStyle = {
   marginTop: "130px",
}

export interface displayProps {"device": string};

export default class Container extends React.Component<displayProps, undefined>{
    componentWillMount(){

    }
    render(){
        return (<div style={containerStyle}>
                   <div style={leftContainerStyle}>
                   <Logo />
                        <div style={buttonStyle as any}>
                        <Button />
                        </div>
                   </div>
                   <div style={rightContainerStyle}>
                       <canvas style={canvasStyle}></canvas>
                       <div style={infoStyle}>
                        <InfoBox />
                        </div>
                   </div>
               </div>);
    }
}