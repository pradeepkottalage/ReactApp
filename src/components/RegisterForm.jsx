import React, { Component } from 'react';
import Form from './common/form'
import Joi from 'joi-browser'
class RegisterForm extends Form {
    state = { 
        data:{username:"",
        password:"",
        name:""
    },
        errors:{}
     }
     schema = {
        username:Joi.string().required().email(),
        password:Joi.string().required().min(5),
        name:Joi.string().required()
     }
    render() { 
        return ( <div>
            <h1>Register Form</h1>
           
            <form onSubmit={this.handleSubmit}>
                    {this.renderInput("username","Username")}
                    {this.renderInput("password","Password","password")}
                    {this.renderInput("name","Name",)}
                   
                    {this.renderButton("Register")}  
            </form>
          
        </div> );
    }
}
 
export default RegisterForm;