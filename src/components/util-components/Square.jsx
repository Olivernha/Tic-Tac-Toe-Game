import React from 'react';

const Square = ({ value, onClick }) => {
    const style = value ? `disabled` : ``;

    return (
        <li  onClick={onClick} className={style}>
            {value}
        </li>
    );
};


export default Square;