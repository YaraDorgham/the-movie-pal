import React,{useEffect,useState,useHistory} from 'react';  
import { Spinner } from 'react-bootstrap';
import './Popup.css';  
import axios from 'axios';
const api_key='78da18deb28f6efe0113be955d928e99'; 

const Popup =(props)=>  {  
    const [movie,setMovie]=useState([]);

useEffect( ()=>{

    async function fetchData(){
        const response= await axios.get('https://api.themoviedb.org/3/movie/'+props.movieID +'?api_key='+api_key);
        setMovie(response.data);
        
       
    }
    fetchData()
   
     
},[]);


return (  

<div className='popup' >  
<div className='popup\_inner'> 
<button className="close" onClick={console.log("close")}>X</button> 
{movie.length==0?<Spinner />: 
<div> 
    <h1>{ movie.original_title }</h1>  
    <div className="popuprow">
        <img className="popupimg" src={'https://image.tmdb.org/t/p/w200/'+  movie.poster_path} alt=""></img>
        <p className="description">{movie.overview}</p>
    </div>
</div>
}


  
</div>
  
</div>  
);  
 
}  

export default Popup;