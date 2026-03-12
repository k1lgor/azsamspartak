import React from "react";

const Hero = () => {
  return (
    <section
      id="top"
      className="section hero-section"
      aria-labelledby="hero-title"
    >
      <div className="container">
        <div className="hero-content">
          <h1 id="hero-title" className="hero-title">
            Вчера. Днес. Утре. <br />
            <span className="blue-text">Спартак завинаги!</span>
          </h1>
        </div>
      </div>
    </section>
  );
};

export default Hero;
