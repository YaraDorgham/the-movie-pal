import React,{useEffect,useState} from 'react';  
import { Spinner } from 'react-bootstrap';
import './Popup.css';  

const Popup =(props)=>  {  
    const [movie,setMovie]=useState([]);


useEffect( ()=>{

    console.log(props.movieID);
    console.log(props.movieList);

    const data=(props.movieList).find(element => element.id ==props.movieID);
    console.log(data);
    setMovie(data);
    //    const fetchData= ()=> {
    //       return props.movieList.find((element) => {
    //        return element.id === props.movieID;
    //     })
        
    //   }
      //fetchData();
    //console.log(fetchData());
   // setMovie(fetchData());
     
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