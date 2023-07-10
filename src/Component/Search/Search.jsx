import React from 'react';
import './Search.css';

const Search = ({
  handleAllclick,
  handleBmwClick,
  handleBenzClick,
  handleRolceClick,
  handleLexusClick,
}) => {
  return (
    <div className="searchW">
      <div className="btns">
        <button onClick={handleAllclick}>All</button>
        <button onClick={handleBmwClick}>BMW</button>
        <button onClick={handleBenzClick}>BENZ</button>
        <button onClick={handleRolceClick}>ROLCE ROYS</button>
        <button onClick={handleLexusClick}>LEXUS</button>
      </div>
      <div className="inputs">
        <input type="text" />
      </div>
    </div>
  );
};

export default Search;
