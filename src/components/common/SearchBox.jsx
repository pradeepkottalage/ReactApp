import React, { Component } from 'react';
class SearchBox extends Component {
    
    render() { 
        const {searchQuery,onChange} = this.props;
        return ( 
            <input placeholder="Search ..."
             className="form-control my-10"
             type="text"
             onChange={e=>onChange(e.currentTarget.value)}
            />
         );
    }
}
 
export default SearchBox;