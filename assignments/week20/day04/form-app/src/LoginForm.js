import React from "react"
import Input from "./Input"

class LoginForm extends React.Component {
    render() {
        return (
            <form>
                <Input label="username" type="text" placeholder="Username" />
                <Input label="password" type="password" placeholder="Password" />

                <button type="submit" className="btn btn-primary">Submit</button>
            </form>
        )
    }
}

export default LoginForm

