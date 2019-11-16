import React from "react";

const Form = props => {
  return (
    <form onSubmit={e => e.preventDefault()}>
      <div className="form-group">
        <label htmlFor="number1">Number 1</label>
        <input
          type="number"
          className="form-control"
          id="number1"
          name="number1"
          placeholder="Number One"
          value={props.number1}
          onChange={props.onChange}
        />
      </div>

      <div className="form-group">
        <label htmlFor="number2">Number 2</label>
        <input
          type="number"
          className="form-control"
          id="number2"
          name="number2"
          placeholder="Number Two"
          value={props.number2}
          onChange={props.onChange}
        />
      </div>
    </form>
  );
};

export default Form;
