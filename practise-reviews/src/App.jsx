import { useState } from "react";
import { FaChevronLeft, FaChevronRight, FaQuoteRight } from "react-icons/fa";
import people from "./data";
const App = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const { name, job, image, text } = people[activeIndex];

  const nextPerson = () => {
    setActiveIndex((curr) => (curr >= people.length - 1 ? 0 : curr + 1));
  };
  const prevPerson = () => {
    setActiveIndex((curr) => (curr <= 0 ? people.length - 1 : curr - 1));
  };
  const randomPerson = () => {
    const randomIndex = Math.floor(Math.random() * people.length);
    if (randomIndex === activeIndex) {
      randomIndex = (randomIndex + 1) % people.length;
    }
    setActiveIndex(randomIndex);
  };
  return (
    <main>
      <article className="review">
        <div className="img-container">
          <img src={image} alt={name} className="person-img" />
          <span className="quote-icon">
            <FaQuoteRight />
          </span>
        </div>
        <h4 className="author">{name}</h4>
        <p className="job">{job}</p>
        <p className="info">{text}</p>
        <div className="btn-container">
          <button className="prev-btn" onClick={prevPerson}>
            <FaChevronLeft />
          </button>
          <button className="next-btn" onClick={nextPerson}>
            <FaChevronRight />
          </button>
        </div>
        <button
          type="button"
          className="btn btn-hipster"
          onClick={randomPerson}
        >
          surprise!
        </button>
      </article>
    </main>
  );
};
export default App;
