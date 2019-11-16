import React from 'react'

const Input = (props) => {
    return (
        <div className="form-group">
            <label htmlFor={props.label}>{props.placeholder}</label>
            <input type={props.type} className="form-control" id={props.label} aria-describedby="emailHelp" placeholder={props.placeholder} />
        </div>
    )
}

export default Input
