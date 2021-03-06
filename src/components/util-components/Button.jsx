import React from 'react'
import './Button.css'
function Button(props) {
    const btnClass = `btn ${props.className || ''}`;
    const type = props.type || '';

    return (
        <button className={btnClass} type={type} onClick={props.onClick}>{props.children}</button>
    )
}

export default Button