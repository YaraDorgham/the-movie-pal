import React,{useState} from 'react';
import ModalPopup from './ModalPopup';
import Modal from 'react-modal';
import './MovieDetail.css';
import { Button} from 'react-bootstrap';
import Popup from './Popup';


const MovieDetail=({title, description, genres ,rating,imgPath})=>{
    const [showPopup ,setShowPopup]=useState(false);
    
    const handleShow = () => setShowPopup(true); 
    const closeShow = () => setShowPopup(false); 

    const path='https://image.tmdb.org/t/p/w200/' + imgPath;
    
    const renderModal =()=>{
        console.log("heeyy");
        return(
            <div>
            <ModalPopup title={title} imgPath={path} description={description} />
            </div>
        );
    }
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
        {showPopup ?  
        <Popup  
          text={title}  
          closePopup={closeShow}
          image={path}  
          description={description}
        />  
        : null 
        }
        <hr />
    </div>
    );
}
export default MovieDetail;