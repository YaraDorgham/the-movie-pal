import React, { useState } from "react";
import "./MovieDetail.css";
import { Button } from "react-bootstrap";
import { useHistory } from "react-router-dom";
import Popup from "./Popup";
const MovieDetail = ({
  id,
  title,
  description,
  genres,
  rating,
  imgPath,
  playNow,
}) => {
  const [showPopup, setShowpopup] = useState(false);
  const history = useHistory();
  const handleShow = () => {
    if (playNow == false) {
      history.push(`/movie/${id}`);
    } else {
      setShowpopup(true);
    }
  };

  const path = "https://image.tmdb.org/t/p/w200/" + imgPath;

  const closepopup = () => {
    setShowpopup(false);
  };
  return (
    <div>
      <h2>{title}</h2>
      <h3>{rating}</h3>
      <h4>{genres}</h4>
      <div className="box">
        <img src={path} alt="" />
        <p>{description}</p>
      </div>
      <Button className="ButtonView" onClick={handleShow}>
        {" "}
        View More
      </Button>
      {showPopup == true ? (
        <Popup movieID={id} fullscreenpopup={false} close={closepopup} />
      ) : null}
      <hr />
    </div>
  );
};
export default MovieDetail;
