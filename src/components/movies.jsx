import React, { Component } from 'react';

import {getMovies} from '../services/getMovies'
import Moviestable from '../components/moviesTable'
import Pagination from './common/pagination'
import {Paginate} from '../utils/paginate'
import ListGroup from './common/listGroup';
import {getGenreList} from '../services/getGenresList'
import {Link }from 'react-router-dom'
import SearchBox from './common/SearchBox'
import _ from 'lodash'
class Movies extends Component {
    state = { 
        movies:[] ,
        currentPage:1,
        pageSize:3,
        genresList:[],
        sortColumn:{path:"title",order:"asc"},
        searchQuery:"",
        selectedGenre:null
     }
     handleDelete = (movie)=>{
        const movies = this.state.movies.filter((m)=>m.id !== movie.id)
        this.setState({movies : movies})
     }
     handleLike = (movie)=>{
        
         const copy = [...this.state.movies]
         const ind =  copy.indexOf(movie)
         copy[ind] = movie
         copy[ind].liked = !copy[ind].liked
         this.setState({movies: copy})
        
     }
     handlePageClick = (page)=>{
        
         this.setState({currentPage:page})
     }
     handleGenreClick = (genre)=>{
            this.setState({searchQuery:"",selectedGenre: genre,currentPage:1})
     }
     componentDidMount(){
         const genre = [{id:"",name:"All Genre"},...getGenreList()]
         this.setState({ movies: getMovies(),genresList:genre})
         
     }
     handleSortCol = (sortColumn)=>{
        
         this.setState({sortColumn:sortColumn})
     }
     handleSearchQuery = (data)=>{
        this.setState({searchQuery: data,selectedGenre: null ,currentPage:1})
        console.log(data)
     }
     
    render() { 
        const {length} = this.state.movies;
        const {user}  = this.props;
        const {movies , currentPage, pageSize,genresList,selectedGenre,sortColumn,searchQuery} = this.state;
           // const filtered = selectedGenre && selectedGenre.id ? movies.filter((m)=>m.genre === selectedGenre.name) : movies
         
        
        const filtered = searchQuery ? movies.filter((movie)=>movie.title.toLowerCase().startsWith(searchQuery.toLowerCase())) : movies
           // console.log(filtered)
        const sorted = _.orderBy(filtered,[sortColumn.path],[sortColumn.order])
        
        const movi = Paginate(sorted, currentPage, pageSize );
        
        if(length === 0)
        return <p>There is no data to show</p>;
        return ( 
        <div className="row m-5" >
            <div className="col-2">
                <ListGroup items={genresList} selectedGenre={this.state.selectedGenre} onItemSelect={this.handleGenreClick} textProperty="name" valueProperty="id"></ListGroup>
            </div>
            <div className="col">
                { user && ( <Link to="movies/new" className="btn btn-primary">Add New</Link>)}
           
            <p>Showing {filtered.length} rows</p>
            <SearchBox searchQuery={this.state.searchQuery} onChange={this.handleSearchQuery}></SearchBox>
            <Moviestable  sortColumn={this.state.sortColumn} onsortColumn={this.handleSortCol} movi={movi} onMovieDelete={this.handleDelete} onMovieLiked={this.handleLike} ></Moviestable>
            <Pagination itemsCount={filtered.length} currentPage={currentPage} pageSize ={this.state.pageSize} onPageClick ={this.handlePageClick}></Pagination>
            
            </div>
           </div>);
    }
}
 
export default Movies;