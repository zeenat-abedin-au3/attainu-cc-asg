import React from "react";

const Input = ({ name, labelText, type, onChange, value }) => {
  return (
    <div className="form-group">
      <label htmlFor={name}>{labelText}</label>
      <input
        required
        type={type}
        name={name}
        id={name}
        className="form-control"
        onChange={onChange}
        value={value}
      />
    </div>
  );
};

export default Input;
