import React, { useState } from "react";
import "./style/SearchForm.scss";

const SearchForm = () => {
  const [term, setTerm] = useState("");
  return (
    <form className="searchForm">
      <input
        type="text"
        className="searchForm__input"
        placeholder="Search item here"
        value={term}
        onChange={(e) => setTerm(e.target.value)}
      />
    </form>
  );
};

export default SearchForm;
