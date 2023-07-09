import React from 'react';
import './Search.css';

const Search = () => {
  return (
    <div className="searchW">
      <div className="btns">
        <button>All</button>
        <button>BMW</button>
        <button>BENZ</button>
        <button>ROLCE ROYS</button>
        <button>LEXUS</button>
      </div>
      <div className="inputs">
        <input type="text" />
      </div>
    </div>
  );
};

export default Search;
