import React, { useEffect, useState } from "react";
import { Spinner } from "react-bootstrap";
import "./Popup.css";
import movieDB from "./api/the-movie-db";
import { useHistory } from "react-router-dom";
const Popup = ({ movieID, close }) => {
  const history = useHistory();
  const [movie, setMovie] = useState([]);
  const [fullscreen, setFullscreen] = useState(false);

  useEffect(() => {
    const loc = window.location.pathname;
    if (loc.includes("movie")) {
      setFullscreen(true);
    }

    async function fetchData() {
      const response = await movieDB.get("/movie/" + movieID);
      setMovie(response.data);
    }
    fetchData();
  }, []);

  const closepopup = () => {
    if (fullscreen == true) {
      history.goBack();
    } else {
      {
        close();
      }
    }
  };

  return (
    <div className={fullscreen == false ? "popup" : "popupfull"}>
      <div className="popup\_inner">
        <button className="close" onClick={closepopup}>
          X
        </button>
        {movie.length == 0 ? (
          <Spinner />
        ) : (
          <div>
            <h1>{movie.original_title}</h1>
            <div className="popuprow">
              <img
                className="popupimg"
                src={"https://image.tmdb.org/t/p/w200/" + movie.poster_path}
                alt=""
              ></img>
              <p className="description">{movie.overview}</p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Popup;
