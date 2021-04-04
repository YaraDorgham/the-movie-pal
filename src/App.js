import React ,{useEffect, useState}from 'react';
import axios from 'axios';
import MovieList from './MovieList';
import SearchBar from './SearchBar';


const App =()=>{
    const api_key='78da18deb28f6efe0113be955d928e99';
    const[movies,setMovies]=useState([]);
    const[searchMovies,setSearchMovies]=useState([]);
    const [genres,setGenres]=useState([]);
   
   
    useEffect( ()=>{
 
        async function fetchData(){
            const response= await axios.get('https://api.themoviedb.org/3/movie/now_playing?api_key='+api_key);
            setMovies (response.data.results.slice(0,5));
            const genresResponse= await axios.get('https://api.themoviedb.org/3/genre/movie/list?api_key='+api_key);
            setGenres(genresResponse.data.genres);
           
            console.log(genres);
           
        }
        fetchData()
         
    },[]);

    const onSearchSubmit = async(term)=>{
        const response= await axios.get('https://api.themoviedb.org/3/search/movie?api_key='+api_key+'&query='+term); 
        setSearchMovies(response.data.results); 
        
    }

    return (
        <div>
            
            <h1>Playing Now</h1>
            <MovieList movies={movies} />
            <SearchBar onSubmit={onSearchSubmit}/>
            <MovieList movies={searchMovies} />

        </div>
            );
};

export default App;