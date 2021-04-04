import React from 'react';
import { useHistory } from 'react-router-dom';
import './Header.css';
const Header =()=>{
    const history = useHistory();

    const gotoSearch =()=>{
        history.push('/search')
    }
    const gotoPlaying =()=>{
        history.push('/')
    }
    return(
        <div className="rectangle">
            <a className="headerSearch" onClick={gotoSearch} >Search</a>
            <a className="headerPlay" onClick={gotoPlaying} >Playing Now</a>
        </div>
    );

};

export default Header;