import React, { Component } from 'react';
import Form from './common/form'
import Joi from 'joi-browser'
import {getGenreList} from '../services/getGenresList';
import {getMovieById,saveMovie} from '../services/getMovies'
class MoviesDetailForm extends Form {
    state = {
        data:{
            id:"",
            title:"",
            genre:"",
            rate: "",
            stock:""
        
        },
        genres:[],
        errors:{}
    }
    schema = {
        id:Joi.number().required(),
        title:Joi.string().required(),
        genre:Joi.number().required(),
        rate: Joi.number().required(),
        stock:Joi.number().required()
    }
    
    componentDidMount(){
        
        const genrelist = getGenreList()
        this.setState({genres:genrelist})
        

        const movieId = this.props.match.params.id;
        if(movieId == "new") {
            const data = {...this.state.data}
            data.id = Date.now()
            this.setState({data:data})
            return ;
        }
       

        const movie = getMovieById(movieId);
        if(!movie) return this.props.history.replace("/not-fount")
       // const {genres} = this.state;
       
        let test =  genrelist.find((m)=>m.name==movie.genre || m.id ==movie.genre);
      
        movie.genre = test.id;
       // console.log(test);
        this.setState({data:this.mapToMovieModel(movie)});

    }
    mapToMovieModel(movie){
        return {
            id:movie.id,
            title:movie.title,
            genre:movie.genre,
            rate: movie.rate,
            stock:movie.stock
        }

    }
    
    doSubmit = ()=>{
        
        saveMovie(this.state.data);
        this.props.history.push("/movies");
        console.log("submitted");
    }
    render() { 
        
        const {genres} = this.state;

        return ( <React.Fragment>
            <h1>Movie Detail form </h1>
            <form onSubmit={this.handleSubmit}>
                {this.renderInput("title","Title")}
                {this.renderSelect("genre","Genre",genres)}
                {this.renderInput("rate","Rate")}
                {this.renderInput("stock","Stock","number")}
                {this.renderButton("Submit")}
            </form>
           
        </React.Fragment>
      
            );
    }
}
 
export default MoviesDetailForm;