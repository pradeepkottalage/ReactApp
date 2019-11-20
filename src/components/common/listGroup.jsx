import React, { Component } from 'react';
const ListGroup =(props) => {
   
    const {items , onItemSelect, textProperty, valueProperty,selectedGenre} =props
    
    return (  <ul className="list-group">
    {
        items.map((item)=>{
             return(<li onClick={()=>{onItemSelect(item)}} key={item[valueProperty]} className= {selectedGenre === item? "list-group-item active":"list-group-item" } >{item[textProperty]}</li>)})
    
   } 
   
  </ul>);
}
 
export default ListGroup ;