import React from 'react';

// Function component
// As props, takes score and playAgain which will be a function to play again  
const Result = ({score, playAgain}) => (
    <div className="score-board">
        <div className="score">You scored {score}/5 correct answers </div>
        <button className="playBtn" onClick={playAgain}>Play Again!</button>
    </div>
);

export default Result;