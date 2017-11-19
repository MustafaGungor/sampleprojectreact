import React from "react";
import { HashRouter  as Router, Switch, Route, Link } from 'react-router-dom';
import DenemeBootstrap from "../pages/DenemeBootstrap";

class Agac extends React.Component{
    render(){
        return <span>"Agac"</span>;
    }
}
class Kus extends React.Component{
    render(){
        return <span>"Kuş"</span>;
    }
}
class Home extends React.Component{
    render(){
        return <span>"Home"</span>;
    }
}
class Acilis extends React.Component{
    render(){
        return <span>"Acilis"</span>;
    }
}


export default class Authorization extends React.Component{
    constructor(){
        super();
        this.state = {

        }
    }
    render(){
        debugger;
        return <Router>
            <div>
                <Switch>
                    <Route exact path='/' component={Acilis} />
                    <Route exact path={'/home'} component={Home} />
                    <Route exact path={'/agac'} component={Agac} />
                    <Route exact path={'/kus'} component={Kus} />
                    <Route exact path={'/bootstraptable'} component={DenemeBootstrap}/>
                </Switch>
            </div>
        </Router>
    }
}