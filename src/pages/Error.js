import React from "react";
import { Link } from "react-router-dom";

const Error = () => {
  return (
    <section className="error-section">
      <h2>oops! you came to wrong page click below 👇 </h2>
      <button>
        <Link to="/" className="btn">back home</Link>
      </button>
    </section>
  );
};

export default Error;
