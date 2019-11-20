import React, { Component } from 'react';
import {Link,NavLink} from 'react-router-dom'
class Navbar extends Component {
    state={
        da:[{hi:"ji"}]
    }
    render() { 
        const {user} = this.props
        //const name = user[0].name
        console.log(user)
        return ( 
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <Link className="navbar-brand" to="#">React App</Link>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav">
                    <li className="nav-item active">
                        <NavLink className="nav-link" to="/movies">Movies <span className="sr-only">(current)</span></NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink className="nav-link" to="/customers">Customers</NavLink>
                    </li>
                   { !user && (
                        <React.Fragment>
                        <li className="nav-item">
                            <NavLink className="nav-link" to="/login">Login</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link " to="/register">Register</NavLink>
                        </li>
                       
                       </React.Fragment> 
                      ) 
                   }
                    { user && (
                        <React.Fragment>
                        <li className="nav-item">
                            <NavLink className="nav-link" to="#">{user[0].name}</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link" to="/logout">Logout</NavLink>
                        </li>
                       
                       </React.Fragment>
                    )
                       
                   }
                    
                   
                    
                   
                    </ul>
                </div>
</nav>
         );
    }
}
// stateless functional components
//  const Navbar = (prop) =>   {
//      return ( 
//             <nav classNameName="navbar navbar-light bg-light">
//             <NavLink classNameName="navbar-brand" to="#">Navbar  <span classNameName="badge badge-secondary">{props.counterLen}</span></NavLink>
            
//             </nav>
//       );
//  }
  
 export default Navbar;
