import React from 'react'

const Input = ({ name, label, ...otherProps }) => {
    return (
        <div className="flex-form-group">
            <label htmlFor={name}>{label}</label>
            <input {...otherProps} className="form-control" id={name} name={name} />
        </div>
    )
}

export default Input
