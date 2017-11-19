import React from "react";
import LeftMenu from "./container/LeftMenu";
import Main from "./container/Main";

export default class MainPage extends React.Component {
    render() {
        return (<div className="main">
            <div className="left-menu">
                <LeftMenu/>
            </div>
            <div className="container-site">
                <Main/>
            </div>
        </div>);
    }
}