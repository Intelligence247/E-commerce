import React from 'react';
import './Search.css';
import { useState } from 'react';

const Search = ({
  handleAllclick,
  handleRolceClick,
  handleLexusClick,
  setIndexed,
}) => {
  const btnArr = ['ALL', 'BMW', 'BENZ', 'ROLCE ROYS', 'LEXUS'];
  return (
    <div className="searchW">
      <div className="btns">
        {/* <button onClick={handleAllclick}>All</button>
        <button onClick={handleBmwClick}>BMW</button>
        <button onClick={handleBenzClick}>BENZ</button>
        <button onClick={handleRolceClick}>ROLCE ROYS</button>
        <button onClick={handleLexusClick}>LEXUS</button> */}
        {btnArr.map((b, i) => (
          // <p></p>
          <button key={i} onClick={() => setIndexed(i)}>
            {b}
          </button>
        ))}
      </div>
      <div className="inputs">
        <input type="text" />
      </div>
    </div>
  );
};

export default Search;
