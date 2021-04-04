import React, { useState } from 'react';
import './SearchBar.css';
import firebase from "./firebase";
import SearchList from './SearchList';
const SearchBar =(props)=>{
    const [term,setTerm]=useState('');
    const [searchHistory,setSearchHistory]=useState([]);
    var moviesRef = firebase.firestore().collection("/moviesearch");
    const onFormSubmit= (event)=>{
        event.preventDefault();
        props.onSubmit(term);
        addSearch(term);
    };

  

    const checkSize =async()=>{
        await moviesRef.get().then(function(querySnapshot){
            if(searchHistory.length===6){
                moviesRef.where('term','==',searchHistory[0]).get().then(function(querySnapshot){
                    querySnapshot.forEach(function(doc){
                        doc.ref.delete();
                    });
                });
                setSearchHistory(searchHistory.splice(1,5));
            }
        });
    };

    const addSearch = async(obj) => {  

        await moviesRef
        .where("term", "==", obj).get()
        .then(function(querySnapshot) {
            if (!querySnapshot.empty) {
                console.log("Document Exist");
            }
            else {

                console.log("Document Doesn't Exist");
                moviesRef.add({term:obj,created: new Date()})
                setSearchHistory([...searchHistory,obj]);
                console.log(searchHistory);
                checkSize();
            }

        });

    };

    
    const renderSearchHistory =async()=>{
        const searchData=await moviesRef.get();
        console.log(searchData);
        // const allSearch =searchData.docs.map((doc)=>{
        //     return <p>{doc.term}</p>
        // });
        // return <div>{allSearch}</div>;
    };

   
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
        <SearchList searchHistory={searchHistory}  />
        </div>
       
        
        );
};


export default SearchBar;