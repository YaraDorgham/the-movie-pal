import React, { useState, useEffect } from "react";
import "./SearchBar.css";
import firebase from "./firebase";
import SearchList from "./SearchList";
import { Spinner } from "react-bootstrap";
const SearchBar = ({ onSubmit }) => {
  const [term, setTerm] = useState("");
  const [searchHistory, setSearchHistory] = useState([]);
  var moviesRef = firebase.firestore().collection("moviesearch");
  var data = [];
  var searchTerms = [];
  const onFormSubmit = (event) => {
    event.preventDefault();
    onSubmit(term);
    addSearch(term);
  };

  useEffect(() => {
    const fetchSearchHistory = async () => {
      await getSearchHistory();
    };

    fetchSearchHistory();
  }, [term]);

  const trial = (obj) => {
    setTerm(obj);
    onSubmit(obj);
    addSearch(obj);
  };

  const addSearch = async (obj) => {
    await moviesRef.add({ term: obj, created: new Date() });
  };

  const getSearchHistory = async () => {
    var terms = [];
    const querySnapshot = await moviesRef
      .orderBy("created", "desc")
      .limit(5)
      .get();
    querySnapshot.forEach((doc) => {
      terms = [...terms, doc.data().term];
    });
    setSearchHistory(terms);
  };

  return (
    <div>
      <div className="ui segment">
        <form onSubmit={onFormSubmit} className="ui form">
          <div className="field">
            <label>Movie Search</label>
            <input
              type="text"
              value={term}
              onChange={(e) => setTerm(e.target.value)}
            />
          </div>
        </form>
      </div>
      <SearchList
        searchHistory={searchHistory}
        Quicksearch={(obj) => trial(obj)}
      />
    </div>
  );
};

export default SearchBar;
