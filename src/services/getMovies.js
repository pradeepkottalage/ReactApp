
const moviesList =[
    {
        id:1,
        title:"Wrong turn",
        genre:"Action",
        rate: 3.6,
        stock:6,
        liked:true
    }
    ,{
        id:2,
        title:"Death Race",
        genre:"Thriller",
        rate: 3.6,
        stock:6,
        liked:false
    },{
        id:3,
        title:"KPM",
        genre:"Comedy",
        rate: 3.6,
        stock:6,
        liked:true
    },{
        id:4,
        title:"dffghfg",
        genre:"Action",
        rate: 3.6,
        stock:6,
        liked:true
    },{
        id:5,
        title:"sdgdfgdfg",
        genre:"Thriller",
        rate: 3.6,
        stock:6,
        liked:true
    },{
        id:6,
        title:"sdgdfgdfg",
        genre:"Thriller",
        rate: 3.6,
        stock:6,
        liked:true
    },{
        id:7,
        title:"sdgdfgdfg",
        genre:"Thriller",
        rate: 3.6,
        stock:6,
        liked:true
    },{
        id:8,
        title:"sdgdfgdfg",
        genre:"Thriller",
        rate: 3.6,
        stock:6,
        liked:true
    }
    ,{
        id:9,
        title:"sdgdfgdfg",
        genre:"Thriller",
        rate: 3.6,
        stock:6,
        liked:true
    }
]

export function getMovies(){
    return moviesList;
}
export function getMovieById(id){

    const movie = moviesList.filter((m)=>m.id == id);
    return movie[0];
}
export function saveMovie(movie){
    let movieInDB = moviesList.find((m)=>m.id == movie.id) || {};
   
    movieInDB.title = movie.title;
    movieInDB.genre = movie.genre;
    movieInDB.rate = movie.rate;
    movieInDB.stock = movie.stock;
    if(!movieInDB.id){
        movieInDB.id = Date.now().toString();
        moviesList.push(movieInDB);
    }
    return movieInDB;
    
}