import React from 'react';
import './searchList.css';

const SearchList =({Quicksearch,searchHistory})=>{
    const data = Array.from(searchHistory);
    const history=data.map((search)=>{
        return( 
        <span>
        <label className="searchHistory" key={search} onClick={()=>Quicksearch(search)}>{`${search} `}</label>
        </span>
        );
    });
    return <div className="alignHorz">{history}</div>;
};

export default SearchList;