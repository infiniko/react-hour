import React from "react";

const FormSelect = ({ label, name, list, defaultValue, size }) => {
  return (
    <fieldset className="fieldset">
      <legend className="fieldset-legend capitalize">{label}</legend>
      <select
        defaultValue={defaultValue}
        name={name}
        id={name}
        className={`select ${size}`}
      >
        {list.map((item) => {
          return (
            <option key={item} value={item}>
              {item}
            </option>
          );
        })}
      </select>
    </fieldset>
  );
};

export default FormSelect;
