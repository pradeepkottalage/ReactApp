import React, { Component } from 'react';
import TableHeader from './tableHeader';

import TableBody from './tableBody';
class Table extends Component {
    
    render() { 
    const {sortColumn,columns,onsortColumn,data } = this.props;
        return (  <table className="table">
    
        <TableHeader sortColumn = {sortColumn} columns={columns} onsortColumn= {onsortColumn}></TableHeader>
        <TableBody data={data} columns={columns}></TableBody>
       
    
        </table> 
        );
    }
}
 
export default Table;