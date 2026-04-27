import aboutSvg from "../assets/about.svg";
import SectionTitle from "./SectionTitle";

const About = () => {
  return (
    <section className="bg-white py-20" id="about">
      <div className="align-element grid md:grid-cols-2 items-center gap-16">
        <img src={aboutSvg} className="w-full h-64" />
        <article>
          <SectionTitle text="code and coffee" />
          <p className="text-shadow-sky-600 mt-8 leading-loose">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Vel aut,
            temporibus alias natus fugit blanditiis error nostrum libero?
            Perspiciatis sed nihil, ex blanditiis ad enim laborum nostrum
            consectetur laboriosam at.
          </p>
        </article>
      </div>
    </section>
  );
};

export default About;
