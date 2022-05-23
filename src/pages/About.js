import React from "react";
import { Link } from "react-router-dom";

const About = () => {
  return (
    <section className="about-section">
      <h2 className="section-title">About us</h2>
      <p>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Praesentium
        deserunt aspernatur voluptas beatae. Beatae hic voluptatem perspiciatis
        cum est voluptas necessitatibus in adipisci quos, cumque atque, soluta
        officia, nesciunt ullam doloribus iure nisi doloremque velit deleniti?
        Ab magni doloremque rem maiores dolore sint suscipit. Ab vel doloremque
        similique est praesentium.
      </p>
      <button>
        <Link to="/" className="btn">back home</Link>
      </button>
    </section>
  );
};

export default About;
