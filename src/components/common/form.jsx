import React, { Component } from 'react';
import Joi from 'joi-browser'
import Input from '../common/inputField'
import Select from '../common/select'
class Form extends Component {
    state={
        data:{},
        error:{}
    }   
    validate = ()=>{
      
        const result = Joi.validate(this.state.data, this.schema,{abortEarly:false})
        if(!result.error) return null;
        const errors = {}
        for(let item of result.error.details)
        errors[item.path[0]] = item.message;
        return errors;
   }
   validateProperty= (input)=>{
      const {name, value} = input;
      const obj = {[name]: value}    
      const schema = {
          [name]:this.schema[name]
      }
      const {error }= Joi.validate(obj, schema) 
      return error ? error.details[0].message: null;
   }
   handleSubmit =(e)=>{
    e.preventDefault();
   
    const errors =  this.validate();
     
    this.setState({errors : errors || {}})
    if(errors) return ;
    
    this.doSubmit();
    
  }
  handleChange= ({currentTarget: input})=>{
      
    const {data,errors} = this.state
    const errorMessage = this.validateProperty(input);
    if(errorMessage) errors[input.name] = errorMessage;
     else delete errors[input.name];

    data[input.name] = input.value
        
    this.setState({data,errors})
}
renderButton = (label)=>{
 return <button className="btn btn-primary" disabled={this.validate()}>{label}</button>
}
   renderInput = (name,label,type="text")=>{
    const {data,errors} = this.state
       return (<Input
        type={type}
         name={name} 
         value={data[name]} 
         onChange={this.handleChange} 
         error={errors[name]} 
         label={label} />
         );
   }
   renderSelect =(name,label, options)=>{
    const {data,errors} = this.state
       return (<Select name={name} 
         label={label}
         value={data[name]}
         option={options} 
         onChange={this.handleChange} 
         error ={errors[name]}
         ></Select>)
   }

}
 
export default Form;