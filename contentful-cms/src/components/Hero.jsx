import React from "react";
import heroImg from "../assets/hero.svg";

const Hero = () => {
  return (
    <section className="hero">
      <div className="hero-center">
        <div className="hero-title">
          <h1>Contentful CMS</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Veniam,
            nostrum veritatis! Vitae deserunt praesentium esse corporis
            reiciendis doloribus, iure voluptatum ducimus nesciunt sit ad non
            repellendus distinctio, reprehenderit velit porro?
          </p>
        </div>
        <div className="img-container">
          <img src={heroImg} alt="browser" className="img" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
