import React, { useEffect, useState, useHistory } from "react";
import MovieList from "./MovieList";
import SearchBar from "./SearchBar";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Header from "./Header";
import Popup from "./Popup";
import Spinner from "./Spinner";
import movieDB from "./api/the-movie-db";
import { connect } from "react-redux";
const App = ({ ID }) => {
  const [movies, setMovies] = useState([]);
  const [searchMovies, setSearchMovies] = useState([]);
  const [genres, setGenres] = useState([]);

  useEffect(() => {
    //console.log(props.ID);
    async function fetchData() {
      const response = await movieDB.get("/movie/now_playing");
      setMovies(response.data.results.slice(0, 5));
      const genresResponse = await movieDB.get("/genre/movie/list");
      setGenres(genresResponse.data.genres);
    }
    fetchData();
  }, []);

  const onSearchSubmit = async (term) => {
    const response = await movieDB.get("/search/movie", {
      params: { query: term },
    });
    setSearchMovies(response.data.results);
  };

  return (
    <div>
      <BrowserRouter>
        <Header />
        <Switch>
          <Route exact path="/">
            <h1>Playing Now</h1>
            {movies.length == 0 || genres.length == 0 ? (
              <Spinner />
            ) : (
              <MovieList movies={movies} genreList={genres} playNow={true} />
            )}
            {ID !== null ? <Popup /> : null}
          </Route>
          <Route path="/search">
            <SearchBar onSubmit={onSearchSubmit} />
            <MovieList
              movies={searchMovies}
              genreList={genres}
              playNow={false}
            />
          </Route>

          <Route
            path="/movie/:id"
            render={({ match }) =>
              movies.length == 0 ? <Spinner /> : <Popup />
            }
          />
        </Switch>
      </BrowserRouter>
    </div>
  );
};

const mapStateToProps = (state) => {
  return { ID: state.movieID };
};

export default connect(mapStateToProps)(App);
