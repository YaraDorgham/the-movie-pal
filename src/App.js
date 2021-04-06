import React ,{useEffect, useState,useHistory}from 'react';
import axios from 'axios';
import MovieList from './MovieList';
import SearchBar from './SearchBar';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Header from './Header';
import Popup from './Popup';
import Spinner from './Spinner';

const App =()=>{
    const api_key='78da18deb28f6efe0113be955d928e99';   
    const[movies,setMovies]=useState([]);
    const[allmovies,setallMovies]=useState([]);
    const[searchMovies,setSearchMovies]=useState([]);
    const [genres,setGenres]=useState([]);
   

 
    useEffect( ()=>{
 
        async function fetchData(){
            const response= await axios.get('https://api.themoviedb.org/3/movie/now_playing?api_key='+api_key);
            setMovies (response.data.results.slice(0,5));
            setallMovies(response.data.results);
            const genresResponse= await axios.get('https://api.themoviedb.org/3/genre/movie/list?api_key='+api_key);
            setGenres(genresResponse.data.genres);
          
           
        }
        fetchData()
         
    },[]);

    const onSearchSubmit = async(term)=>{
        const response= await axios.get('https://api.themoviedb.org/3/search/movie?api_key='+api_key+'&query='+term); 
        setSearchMovies(response.data.results); 
        
    }

    return (
        <div>
            <BrowserRouter>
            <Header />
                <Switch>
                    <Route exact path="/">
                    <h1>Playing Now</h1>
                    {
                        (movies.length===0||genres.length==0)? <Spinner />:<MovieList movies={movies} genreList={genres} /> 
                    }    
                    </Route>
                    <Route path="/search">
                         <SearchBar onSubmit={onSearchSubmit}/> 
                         <MovieList movies={searchMovies} genreList={genres}/> 
                    </Route >
                    {/* <Route exact path="/movie/:id" render={({match}) => (
                        movies.length===0 ? <Spinner />: <Popup movie={movies.find(m => m.id === match.params.id)} />
                    )} /> */}

                        <Route  path="/movie/:id" render={({match}) => (
                        movies.length===0 ? <Spinner />: <Popup  movieID={match.params.id} />
                    )} />

               </Switch>
            </BrowserRouter>
             
            
            

        </div>
            );
};

export default App;