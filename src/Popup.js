import React from 'react';  
import './Popup.css';  

const Popup =(props)=>  {  
  
return (  
<div className='popup' >  
<div className='popup\_inner'> 
<button className="close" onClick={props.closePopup}>X</button> 
<h1>{props.text}</h1>  
<div className="popuprow">
    <img className="popupimg" src={props.image} alt=""></img>
    <p className="description">{props.description}</p>
</div>

  
</div>
  
</div>  
);  
 
}  

export default Popup;