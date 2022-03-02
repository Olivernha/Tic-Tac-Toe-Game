import React from 'react';
import style from './Header.module.css'
const Header = () => {
    return (
        <div className={style['main-header']}>
            <h1>Play Tic, Tac, Toe</h1>
            <p>Built with React, CSS modules and - of course - lots of love!</p>
        </div>
    );
};


export default Header;