import React from 'react';
import './MovieDetail.css';
const MovieDetail=({title, description, genres ,rating,imgPath})=>{
    const path='https://image.tmdb.org/t/p/w200/' + imgPath;
    return(
    <div>
        <h2>{title}</h2>
        <h3>{rating}</h3>
        <h4>{genres}</h4>
        <div className="box">
            <img src={path} alt="" />
            <p>{description}</p>
        </div>
        <hr />
    </div>
    );
}
//asdadadsyara
export default MovieDetail;