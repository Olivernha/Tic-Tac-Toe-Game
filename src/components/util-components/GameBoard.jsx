import React from 'react';
import './GameBoard.css';

const GameBoard = () => {
    return (
        <ol className={'game-board'}>
            <li data-col="1" data-row="1"></li>
            <li data-col="2" data-row="1"></li>
            <li data-col="3" data-row="1"></li>

            <li data-col="1" data-row="2"></li>
            <li data-col="2" data-row="2"></li>
            <li data-col="3" data-row="2"></li>

            <li data-col="1" data-row="3"></li>
            <li data-col="2" data-row="3"></li>
            <li data-col="3" data-row="3"></li>
        </ol>
    );
};


export default GameBoard;