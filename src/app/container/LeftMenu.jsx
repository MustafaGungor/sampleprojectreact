import React from "react";
import {Nav,NavItem} from "react-bootstrap";
import {Link} from "react-router-dom";

export default class LeftMenu extends React.Component{

    constructor(){
        super();
        this.handleSelect = this.handleSelect.bind(this);
    }
    render(){

        return <Nav bsStyle="pills" stacked activeKey={1}>
            <NavItem eventKey={1} ><Link to="/home">Anasayfa</Link></NavItem>
            <NavItem eventKey={2} title="Item"><Link to="/agac">Ağaçlar</Link></NavItem>
            <NavItem eventKey={3} title="Item"><Link to="/kus">Kuşlar</Link></NavItem>
            <NavItem eventKey={4} title="Idsa"><Link to="/bootstraptable">BootstrapTable Exam</Link></NavItem>
        </Nav>
    }
    handleSelect(selectedKey) {
        alert(`selected ${selectedKey}`);
    }
}