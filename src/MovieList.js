import React from 'react';
import MovieDetail from './MovieDetail';

const MovieList =(props)=>{
    const movies=props.movies.map((movie)=>{
        return <MovieDetail key= {movie.original_title} title={movie.original_title} description={movie.overview} genres={movie.genre_ids} rating={movie.vote_average} imgPath={movie.poster_path} />
    });
    return <div >{movies}</div>;
};

export default MovieList;