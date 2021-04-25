import React, { useState, useEffect } from "react";
import "./MovieDetail.css";
import { Button } from "react-bootstrap";
import { useHistory } from "react-router-dom";
import Popup from "./Popup";
import { connect } from "react-redux";
import { setMovieID } from "./actions";
const MovieDetail = ({
  id,
  title,
  description,
  genres,
  rating,
  imgPath,
  playNow,
  reduxID,
}) => {
  // const [showPopup, setShowpopup] = useState(false);
  const history = useHistory();
  const [show, setShow] = useState(false);
  useEffect(() => {}, []);

  const handleShow = () => {
    console.log(id);
    reduxID(id);
    if (playNow == false) {
      history.push(`/movie/${id}`);
    } else {
      //setShowpopup(true);
    }
  };

  const path = "https://image.tmdb.org/t/p/w200/" + imgPath;

  // const closepopup = () => {
  //   setShowpopup(false);
  // };
  return (
    <div>
      <h2>{title}</h2>
      <h3>{rating}</h3>
      <h4>{genres}</h4>
      <div className="box">
        <img src={path} alt="" />
        <p>{description}</p>
      </div>
      <div className="parentButton">
        <Button className="ButtonView" onClick={handleShow}>
          {" "}
          View More
        </Button>
      </div>
      <hr />
    </div>
  );
};
const mapDispatchToProps = (dispatch) => {
  return {
    reduxID: (MovId) => {
      dispatch(setMovieID(MovId));
    },
  };
};
export default connect(null, mapDispatchToProps)(MovieDetail);
