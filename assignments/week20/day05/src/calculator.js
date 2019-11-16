import React from "react"
import Form from "./Form"

class calculator extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            number1: "",
            number2: "",
            result: ""
        }
    }
    handleChange = e => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }
    calculate = (operator) => {
        const { number1, number2 } = this.state;
        let res = ""
        switch (operator) {
            case '+':
                res = Number(number1) + Number(number2)
                break;
            case '-':
                res = Number(number1) - Number(number2)
                break;
            case '*':
                res = Number(number1) * Number(number2)
                break;
            case '/':
                res = Number(number1) / Number(number2)
                break;

            default:
                res = Number(number1) + Number(number2)
                break;
        }
        this.setState({
            result: res
        })
    }
    render() {

        return (
            <div>
                <Form number1={this.state.number1} number2={this.state.number2} onChange={this.handleChange} />
                <button className="btn btn-outline-success mx-2" onClick={() => this.calculate("+")}>+</button>
                <button className="btn btn-outline-success mx-2" onClick={() => this.calculate("-")}>-</button>
                <button className="btn btn-outline-success mx-2" onClick={() => this.calculate("*")}>*</button>
                <button className="btn btn-outline-success mx-2" onClick={() => this.calculate("/")}>/</button>

                {this.state.result !== "" && (
                    <div className="card mt-3">
                        <div className="card-body">
                            <h1 id="resultHere">{this.state.result}</h1>
                        </div>
                    </div>
                )}

            </div>
        )
    }
}

export default calculator


