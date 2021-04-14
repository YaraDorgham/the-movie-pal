import React from "react";
import "./searchList.css";

const SearchList = ({ Quicksearch, searchHistory }) => {
  const data = Array.from(searchHistory);
  const history = data.map((search, index) => {
    return (
      <span key={index}>
        <label
          className="searchHistory"
          onClick={() => Quicksearch(search)}
        >{`${search} `}</label>
      </span>
    );
  });
  return <div className="alignHorz">{history}</div>;
};

export default SearchList;
