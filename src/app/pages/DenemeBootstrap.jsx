import React from "react";
import {BootstrapTable,TableHeaderColumn} from "react-bootstrap-table";
import DenemeProps from "./DenemeProps";

export default class DenemeBootstrap extends React.Component{
    constructor(){
        super();
        this.state = {

        }
    }
    render(){
        let products = [
            {
                id : 1,
                name : "Oguzhan",
                price : "Engineer"
            },
            {
                id : 2,
                name : "Mustafa",
                price : "Developer"
            }
        ];
        return <div>
            <BootstrapTable data={ products } striped hover condensed>
                <TableHeaderColumn dataField='id' isKey>Product ID</TableHeaderColumn>
                <TableHeaderColumn dataField='name'>Product Name</TableHeaderColumn>
                <TableHeaderColumn dataField='price'>Product Price</TableHeaderColumn>
            </BootstrapTable>

            <DenemeProps data={products} text="OguzhanAydın"/>

        </div>
    }
}