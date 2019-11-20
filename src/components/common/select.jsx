import React, { Component } from 'react';
class Select extends Component {
    
    render() { 
        const {option,label,name,error,onChange,value} = this.props
        return ( <div className="form-group">
        <label htmlFor={name}>{label}</label>
        <select name={name} id={name} value={value} onChange={onChange} className="form-control">
            <option value=""></option>
            {option.map((op)=><option key={op.id} value={op.id}>{op.name}</option>)}
        </select>   
        {error && <div className="alert alert-danger">{error}</div>}
        </div> );
    }
}
 
export default Select;