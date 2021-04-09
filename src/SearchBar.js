import React, { useState,useEffect } from 'react';
import './SearchBar.css';
import firebase from "./firebase";
import SearchList from './SearchList';
import { Spinner } from 'react-bootstrap';
const SearchBar =(props)=>{
    const [term,setTerm]=useState('');
    const [searchHistory,setSearchHistory]=useState([]);
    var moviesRef = firebase.firestore().collection("moviesearch"); 
    var data=[];
    var searchTerms=[];
    const onFormSubmit= (event)=>{
        event.preventDefault();
        props.onSubmit(term);
        addSearch(term);
    };


    useEffect( ()=>{
        renderSearch();
        //data = firebase.firestore().collection("moviesearch").get();
     
         
    },[term]);

    

    

    const trial =(obj)=>{
        setTerm(obj);
        props.onSubmit(obj);
        addSearch(obj);

    }

    const addSearch = async(obj) => {  

        await moviesRef
        .where("term", "==", obj).get()
        .then(function(querySnapshot) {
           
         
            moviesRef.add({term:obj,created: new Date()})
                
        });

    };

  const renderSearch = ()=>{
    var terms=[];
    moviesRef.orderBy("created","desc").limit(5).get().then((querySnapshot) => {
        querySnapshot.forEach((doc) => {
            terms=[...terms,doc.data().term]
            
        });
        setSearchHistory(terms)
    });
  
    return terms;
  }

   
    return(
        <div>
        <div className="ui segment">
            <form onSubmit={onFormSubmit} className="ui form">
                <div className="field">
                    <label>Movie Search</label>
                    <input 
                    type="text" 
                    value={term} 
                    onChange={e => setTerm( e.target.value)}
                    />

                </div>
            </form>
        </div>
         <SearchList searchHistory={searchHistory} Quicksearch={(obj)=>trial(obj)}/>
        
        </div>
       
        
        );
};


export default SearchBar;