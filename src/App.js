import React, { Component } from 'react';
import {Route,Redirect,Switch} from 'react-router-dom'
import Navbar from './components/NavBar'
//import Counters from './components/counters'
import Movies from './components/movies';
import NotFound from './components/notFound'
import Customers from './components/customers'
import MoviesDetailForm from './components/MoviesDetailForm'
import LoginForm from './components/loginForm'
import RegisterForm from './components/RegisterForm'
import auth from './services/auth'
import LogOut from './components/logOut';
import ProtectedRoute from './components/common/ProtectedRoute';

class App extends Component {
    state = { 
        counters:[
            {id:1, value:1},
            {id:2, value:4},
            {id:3, value:5},
            {id:4, value:6},
        ]
     }
     handleIncrement = (CounterData)=>{
       const cntr  = [...this.state.counters];
       const index = cntr.indexOf(CounterData);
       cntr[index] = {...CounterData}
       cntr[index].value++;
       this.setState({counters:cntr})
     }
     handleDelete = (counterID)=>{
        const counters = this.state.counters.filter((c)=>c.id !== counterID )
        this.setState({counters:counters})
    }
    handleReset = ()=>{
        const cntr  = [...this.state.counters];
        cntr.map((a)=>a.value = 0);
        this.setState({counters: cntr})
    }
    componentDidMount(){
        const user = auth.getUser();
        this.setState({user})
    }
    render() { 
        return ( 
            <React.Fragment>
                <Navbar user={this.state.user}></Navbar>
                
                <main className="container">
                    <Switch>
                        <ProtectedRoute path="/movies/:id" component={MoviesDetailForm}/>     
                        <Route path="/movies" 
                        render={(props)=> <Movies {...props} user={this.state.user}></Movies>}
                        />
                        
                        <Route path="/not-found" component={NotFound}/> 
                        <Route path="/customers" component={Customers}/>                 
                        <Route path="/login" component={LoginForm}/>  
                        <Route path="/logout" component={LogOut}/>  

                        <Route path="register" component={RegisterForm} />

                       
                        <Redirect from="/" exact  to="/movies"></Redirect>
                        <Redirect to="/not-found"></Redirect>
                    </Switch>
                   
                   
                {/* <Movies></Movies> */}
                   {/* <Counters counter={this.state.counters} onDelete={this.handleDelete} onReset={this.handleReset} onIncrement={this.handleIncrement}></Counters> */}
                </main>
            </React.Fragment>
       );
    }
}
 
export default App;