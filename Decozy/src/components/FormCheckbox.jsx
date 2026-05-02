const FormCheckbox = ({ label, name, defaultValue, size }) => {
  return (
    <div className="flex items-center justify-center">
      <label className="label cursor-pointer capitalize" htmlFor={name}>
        <input
          type="checkbox"
          name={name}
          id={name}
          defaultChecked={defaultValue}
          className={`checkbox checkbox-primary ${size}`}
        />
        {label}
      </label>
    </div>
  );
};

export default FormCheckbox;
