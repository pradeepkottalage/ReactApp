import React, { Component } from 'react';
class TableHeader extends Component {
    // columns
    // sort column obj
    //  sort col fun
    raiseSort =(col)=>{
        const sortColumn = {...this.props.sortColumn}
        if(sortColumn.path === col){
           sortColumn.order = (sortColumn.order === "asc") ? "desc":"asc";
       }
         
       else {
           sortColumn.path = col
           sortColumn.order = "asc"
       }
       this.props.onsortColumn(sortColumn)
    }
    renderSortIcon = (col)=>{
        const {sortColumn} = this.props
        if(col.name !== sortColumn.path)
           return null
           if(sortColumn.order ==="asc")
           return <i className="fa fa-sort-asc"></i>
           if(sortColumn.order ==="desc")
           return <i className="fa fa-sort-desc"></i>
        
    }
    render() { 

        return (  <thead>
            <tr>
               {
                  this.props.columns.map((col)=><th key={col.name} onClick={()=>this.raiseSort(col.name)}>{col.label} {this.renderSortIcon(col)}</th>)
               }  
                
            </tr>
            </thead> );
    }
}
 
export default TableHeader;