import React from 'react'

const TextInput = ({ title, value, type, placeholder, onChangeText = () => { } }) => {
    return (
        <div className="field">
            <label>{title}</label>
            <input
                type={type ?? 'text'}
                name="name"
                placeholder={placeholder ?? ""}
                value={value}
                onChange={(e) => onChangeText(e)} />
        </div>
    )
}

export default TextInput