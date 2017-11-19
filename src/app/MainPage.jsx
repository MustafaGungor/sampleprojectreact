import React from "react";
import LeftMenu from "./container/LeftMenu";
import Main from "./container/Main";
import Header from "./container/Header";
import Authorization from "./container/Authorization";

export default class MainPage extends React.Component {
    constructor(props){
        super(props);
    }
    render() {
        debugger;
        return (<div className="main">
            <div className="header-site">
                <Header/>
            </div>
            <div className="left-menu">
                <LeftMenu/>
            </div>
            <div className="container-site">
                <Authorization/>
            </div>
        </div>);
    }
}