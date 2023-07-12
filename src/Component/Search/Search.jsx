import React from 'react';
import './Search.css';
import { FileSearch } from 'phosphor-react';

const Search = ({ setIndexed, setInputs }) => {
  const btnArr = ['ALL', 'BMW', 'BENZ', 'ROLCE ROYS', 'LEXUS'];
  return (
    <div className="searchW">
      <div className="btns">
        {btnArr.map((b, i) => (
          <button key={i} onClick={() => setIndexed(i)}>
            {b}
          </button>
        ))}
      </div>
      <div className="inputs">
        <div className="searchIcon">
          <FileSearch size={20} color="white" />
        </div>
        <input
          type="text"
          placeholder="Name of Item..."
          onChange={(e) => setInputs(e.target.value.toUpperCase())}
        />
      </div>
    </div>
  );
};

export default Search;
