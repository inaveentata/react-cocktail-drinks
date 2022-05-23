import React from "react";
import { Link } from "react-router-dom";

const SearchForm = ({ searchTerm, setSearchTerm }) => {
  const handleSubmit = (e) => {
    e.preventDefault()
  }
  return (
    <section className="form">
      <form >
        <div className="input-group">
          <label htmlFor="searchTerm">Search for your favourite cocktail</label>
          <input
            type="text"
            name="searchTerm"
            id="searchTerm"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
      </form>
    </section>
  );
};

export default SearchForm;
