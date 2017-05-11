import * as React from "react";
import Button from "./Button";
import InfoBox from "./InfoBox";

var containerStyle = {
    margin: "100px auto",
    width: "900px",
    height: "600px",
    backgroundImage: "url(/dist/assets/background.jpg)"
}

export interface displayProps {"device": string};

export default class Container extends React.Component<displayProps, undefined>{
    componentWillMount(){

    }
    render(){
        return (<div style={containerStyle}>
                   <p className="App-content">{this.props.device}</p>
                   <Button />
                   <InfoBox />
               </div>);
    }
}