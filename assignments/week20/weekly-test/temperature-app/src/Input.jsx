import React from "react";

const Input = props => {
  return (
    <div className="form-group">
      <label htmlFor={props.label}>{props.labelText}</label>
      <input
        type={props.type}
        className="form-control"
        id={props.label}
        name={props.label}
        placeholder={props.placeholder}
        value={props.value}
        onChange={props.onChange}
        onKeyUp={props.onKeyUp}
      />
    </div>
  );
};

export default Input;
