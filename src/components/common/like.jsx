import React, { Component } from 'react';
class Like extends Component {
    
 
    render() { 
        let heartClass = 'fa fa-heart';
        if(!this.props.movie.liked)
        heartClass += '-o';
        
        return ( <i className={heartClass} onClick={()=>this.props.onClick(this.props.movie)}  aria-hidden="true"></i>  );
    }
}
 
export default Like;