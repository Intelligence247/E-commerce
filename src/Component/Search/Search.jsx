import React from 'react';
import './Search.css';

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
        <input
          type="text"
          onChange={(e) => setInputs(e.target.value.toUpperCase())}
        />
      </div>
    </div>
  );
};

export default Search;
