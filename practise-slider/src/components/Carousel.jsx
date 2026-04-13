import { useEffect, useRef, useState } from "react";
import { list } from "../data";
import { FaQuoteRight } from "react-icons/fa";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";

const Carousel = () => {
  const [cards] = useState(list);
  const [activeCard, setActiveCard] = useState(0);
  let timerRef = useRef();

  const prevSlide = () => {
    setActiveCard((prev) => (prev - 1 + cards.length) % cards.length);
  };
  const nextSlide = () => {
    setActiveCard((prev) => (prev + 1) % cards.length);
  };
  useEffect(() => {
    timerRef = setInterval(() => {
      nextSlide();
    }, 5000);

    return () => clearInterval(timerRef);
  }, [activeCard]);
  return (
    <section className="slider-container">
      {cards.map((card, cardIndex) => {
        const { id, image, name, title, quote } = card;
        return (
          <article
            className="slide"
            style={{
              transform: `translateX(${100 * (cardIndex - activeCard)}%)`,
              opacity: cardIndex === activeCard ? 1 : 0,
              visibility: cardIndex === activeCard ? "visible" : "hidden",
            }}
            key={id}
          >
            <img src={image} alt={name} className="person-img" />
            <h5 className="name">{name}</h5>
            <p className="title">{title}</p>
            <p className="text">{quote}</p>
            <FaQuoteRight className="icon" />
          </article>
        );
      })}
      <button className="prev" onClick={prevSlide} type="button">
        <FiChevronLeft />
      </button>
      <button className="next" onClick={nextSlide} type="button">
        <FiChevronRight />
      </button>
    </section>
  );
};

export default Carousel;
