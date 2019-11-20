import React, { Component } from 'react';
class Button  extends Component {
  
    // triggerClick = ()=>{
    //     console.log("hi")
    // }
    render() { 
        return ( <button className="btn btn-primary" onClick={()=>this.props.clickEvent()}>{this.props.label}</button> );
    }
}
 
export default Button ;