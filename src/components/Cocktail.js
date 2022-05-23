import React from "react";
import { Link } from "react-router-dom";

const Cocktail = ({ drink }) => {
  const { id, name, image, glass, type } = drink;
  return (
    <article className="cocktail">
      <div className="cocktail-img">
        <img src={image} alt="" />
      </div>
      <div className="cocktail-footer">
        <h1>{name}</h1>
        <h3>{glass}</h3>
        <p>{type}</p>
        <button>
          <Link to={`/cocktail/${id}`} className="btn">
            details
          </Link>
        </button>
      </div>
    </article>
  );
};

export default Cocktail;
