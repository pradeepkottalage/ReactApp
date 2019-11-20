import React, { Component } from 'react';
import _ from 'lodash'
class TableBody extends Component {
    // rows
    // like event
    // delete event
    renderCell= (row,col)=>{
       
      if(col.content){
        return col.content(row);
      }  
        
      return row[col.name]
    }

    render() { 
        const {data ,columns} = this.props;

        return ( <tbody>
            {data.map((row)=> (<tr key={row.id}>
              
              {columns.map((col)=><td key={col.name}>{this.renderCell(row,col)}</td>)}
              
                </tr>)
            )}
        </tbody> );
    }
}
 
export default TableBody;