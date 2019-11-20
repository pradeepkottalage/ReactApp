import React from 'react';
import reactDom from 'react-dom';
import {BrowserRouter} from 'react-router-dom'
//import Counter from './components/counter'
//import Movies from './components/movies'
import App from './App'
import "bootstrap/dist/css/bootstrap.css"
import "font-awesome/css/font-awesome.css"


reactDom.render(<BrowserRouter><App></App></BrowserRouter>, document.getElementById('root'))