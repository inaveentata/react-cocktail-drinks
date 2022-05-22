import React from "react";
import { Link } from "react-router-dom";

const Error = () => {
  return (
    <section>
      <h2>oops! you came to wrong page</h2>
      <Link to="/">back home</Link>
    </section>
  );
};

export default Error;
