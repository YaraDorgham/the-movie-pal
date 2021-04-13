import React from "react";
import MovieDetail from "./MovieDetail";

const MovieList = ({ movies, genreList, playNow }) => {
  const allmovies = movies.map((movie) => {
    const movieGenre = movie.genre_ids.map((idgenre) => {
      const type = genreList.find((element) => element.id == idgenre);
      return <div>{type.name}</div>;
    });

    return (
      <MovieDetail
        key={movie.poster_path}
        id={movie.id}
        title={movie.original_title}
        description={movie.overview}
        genres={movieGenre}
        rating={movie.vote_average}
        imgPath={movie.poster_path}
        playNow={playNow}
      />
    );
  });
  return <div>{allmovies}</div>;
};

export default MovieList;
