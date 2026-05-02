import React from "react";

const About = () => {
  return (
    <>
      <div className="flex flex-wrap gap-2 sm:gap-x-6 items-center justify-center">
        <h1 className="text-4xl font-bold leading-none tracking-tight sm:text-6xl ">
          We love
        </h1>
        <div className="stats bg-primary shadow">
          <div className="stat">
            <div className="stat-title text-primary-content text-4xl font-bold tracking-widest">
              Decozy
            </div>
          </div>
        </div>
      </div>
      <p className="mt-6 text-lg leading-8 max-w-2xl mx-auto">
        At Decozy, we believe furniture is more than just function it's the
        foundation of comfort, style, and everyday living. Our vision is to
        create thoughtfully designed pieces that bring warmth and personality
        into every space. Whether it's a cozy corner or a complete home
        transformation, Decozy blends modern aesthetics with practical design to
        suit your lifestyle. We're passionate about making furniture that feels
        as good as it looks simple, stylish, and made for real homes.
      </p>
    </>
  );
};

export default About;
