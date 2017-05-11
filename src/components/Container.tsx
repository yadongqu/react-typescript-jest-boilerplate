import * as React from "react";

export interface displayProps {"device": "desktop"};

export default class Container extends React.Component<displayProps, undefined>{
    render(){
        return <div>Container</div>
    }
}