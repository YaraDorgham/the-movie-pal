import React from 'react';
import './searchList.css';

const SearchList =(props)=>{
    const data = Array.from(props.searchHistory);
    const history=data.map((search)=>{
        return( 
        <span>
        <label className="searchHistory" key={search} onClick={props.Quicksearch(search)}>{`${search} `}</label>
        </span>
        );
    });
    return <div className="alignHorz">{history}</div>;
};

export default SearchList;