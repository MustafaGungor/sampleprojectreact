import React from "react";


export default class DenemeProps extends React.Component{
    static PropTypes = {
        text : React.PropTypes.string,
        data : React.PropTypes.array
    }
    constructor(props){
        super(props);
        this.state = {
            text : props.data || "TEXT",
            data : props.data || [{id : 5, name : "Mehmet", price : "Lawyer"}]
        }
    }
    render(){
        return <div>
			
			<div>
            <BootstrapTable data={ this.state.data} striped hover condensed>
                <TableHeaderColumn dataField='id' isKey>Product ID</TableHeaderColumn>
                <TableHeaderColumn dataField='name'>Product Name</TableHeaderColumn>
                <TableHeaderColumn dataField='price'>Product Price</TableHeaderColumn>
            </BootstrapTable>
			</div>
        </div>
    }
}