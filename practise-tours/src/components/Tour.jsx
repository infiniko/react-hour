import React, { useState } from "react";

const Tour = ({ id, image, info, name, price, removeTour }) => {
  const [readMore, setReadMore] = useState(true);
  return (
    <article className="single-tour">
      <img src={image} alt={name} className="img" />
      <span className="tour-price">{price}</span>
      <div className="tour-info">
        <h5>{name}</h5>
        <p>{readMore ? `${info.substring(0, 200)}...` : info}</p>
        <button
          type="button"
          className="info-btn"
          onClick={() => setReadMore((prev) => !prev)}
        >
          {readMore ? "Read more" : "show less"}
        </button>
        <button
          type="button"
          className="btn btn-block delete-btn"
          onClick={() => removeTour(id)}
        >
          not interested
        </button>
      </div>
    </article>
  );
};

export default Tour;
