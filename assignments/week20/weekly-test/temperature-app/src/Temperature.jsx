import React, { Component } from "react";
import Input from "./Input";

class Temperature extends Component {
  constructor(props) {
    super(props);
    this.state = {
      celsius: "",
      fahrenheit: ""
    };
  }
  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };
  celsiusKeyUp = () => {
    if (!this.state.celsius) {
      this.setState({
        celsius: "",
        fahrenheit: ""
      });
      return;
    }
    this.setState({
      fahrenheit: (this.state.celsius * (9 / 5) + 32).toFixed(2)
    });
  };
  fahrenheitKeyUp = () => {
    if (!this.state.fahrenheit) {
      this.setState({
        celsius: "",
        fahrenheit: ""
      });
      return;
    }
    this.setState({
      celsius: (((this.state.fahrenheit - 32) * 5) / 9).toFixed(2)
    });
  };
  render() {
    const { celsius, fahrenheit } = this.state;
    return (
      <form onSubmit={e => e.preventDefault()}>
        <Input
          label="celsius"
          labelText="Celsius (°C)"
          type="text"
          placeholder="Celsius"
          value={celsius}
          onChange={this.handleChange}
          onKeyUp={this.celsiusKeyUp}
        />
        <Input
          label="fahrenheit"
          labelText="Fahrenheit (°F)"
          type="text"
          placeholder="Fahrenheit"
          value={fahrenheit}
          onChange={this.handleChange}
          onKeyUp={this.fahrenheitKeyUp}
        />
      </form>
    );
  }
}

export default Temperature;
