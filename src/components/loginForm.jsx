import React, { Component } from 'react';
import auth from '../services/auth'
import {Redirect} from 'react-router-dom'
import Form from './common/form'
import Joi from 'joi-browser'
class LoginForm extends Form {
    state = {
        data:{
            username:"",
            password:""
        },
        errors:{

        }
    }
    schema = {
        username:Joi.string().required(),
        password:Joi.string().required()
    }
    
    
    doSubmit = ()=>{
        const {state} = this.props.location;

        try {
            const isValid =  auth.validateUser(this.state.data);
          
            if(isValid) return window.location = state? state.from.pathname :"/"
        } catch (error) {
             throw "invalid user"  ;
        }
        
         
         
       
    }
   
    render() { 
        if(auth.getUser() ) return <Redirect to="/login" />
        return ( <div>
            <h1>Login</h1>
                <form onSubmit={this.handleSubmit}>
                    {this.renderInput("username","Username")}
                    {this.renderInput("password","Password","password")}
                   
                    {this.renderButton("Login")}  
                </form>
               
        </div> );
    }
}
 
export default LoginForm;