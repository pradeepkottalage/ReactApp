import React, { Component } from 'react';
import Like from './common/like'
import TableHeader from './common/tableHeader'
import TableBody from './common/tableBody'
import Table from './common/table'

import {Link} from 'react-router-dom'

class Moviestable extends Component {
      columns = [
                {name:"title",label:"Title" , content:(m)=><Link to={`/movies/${m.id}`}>{m.title}</Link>},
                {name:"genre",label:"Genre"},
                {name:"stock",label:"Stock"},
                {name:"rate",label:"Title"},
                {name:"like",label:"Like", content:(m)=> <Like movie={m} onClick={this.props.onMovieLiked}></Like>},
                {name:"Action", label:"Action", content:(m)=> <button onClick={()=> this.props.onMovieDelete(m)}  className="btn btn-danger">Delete</button>}
                    ]
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
    
    render() { 
        const {movi,sortColumn} = this.props;
        return ( <React.Fragment>
           
        <Table 
        sortColumn = {sortColumn} 
        columns={this.columns} 
        onsortColumn= {this.props.onsortColumn} 
        data={movi}></Table>
        </React.Fragment>
    
      );
    }
}
 
export default Moviestable;
