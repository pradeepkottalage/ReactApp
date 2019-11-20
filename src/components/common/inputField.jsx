import React, { Component } from 'react';
const Input = ({type,name,label,onChange, value,error}) => {
    return ( 
        <div className="form-group">
        <label htmlFor={label}>{label}</label>
        <input name={name} onChange={onChange} value={value} id={name} type={type} className="form-control"/>
        {error && <div className="alert alert-danger">{error}</div>}
        </div>
   
     );
}
 
export default Input;