import React from 'react';
import ModalPopup from './ModalPopup';
import './MovieDetail.css';
import { Button} from 'react-bootstrap';
import { useHistory } from 'react-router-dom'

const MovieDetail=({id,title, description, genres ,rating,imgPath})=>{
    const history = useHistory();
    const handleShow = () =>{ 
      
       history.push(`/movie/${id}`);
    } 
   
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
        <Button className="ButtonView" onClick={handleShow}> View More</Button>
        <hr />
    </div>
    );
}
export default MovieDetail;