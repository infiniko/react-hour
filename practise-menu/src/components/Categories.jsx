import React from "react";

const Categories = ({ categories, filteredItems }) => {
  return (
    <div className="btn-container">
      {categories.map((category) => (
        <button
          type="button"
          className="btn"
          key={category}
          onClick={() => filteredItems(category)}
        >
          {category}
        </button>
      ))}
    </div>
  );
};

export default Categories;
