import React from 'react';
import MovieDetail from './MovieDetail';

const MovieList =(props)=>{
    
    const movies=props.movies.map((movie)=>{
        const movieGenre=movie.genre_ids.map((idgenre)=>{
            const type=props.genreList.find(element => element.id == idgenre)
            return <div>{type.name}</div>
        });

        return <MovieDetail key= {movie.poster_path} id={movie.id} title={movie.original_title} description={movie.overview} genres={movieGenre} rating={movie.vote_average} imgPath={movie.poster_path} />
    });
    return <div >{movies}</div>;
};

export default MovieList;   