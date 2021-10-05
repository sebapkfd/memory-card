import React from "react";

const Scoreboard = ({ score, bestScore, playAgain }) => {
    return (score === 15) ? (
        <div className='score-board'>
            <h2>You have won!</h2>
            <button onClick={() => playAgain()}>Play Again</button>
        </div>
    ) : (
        <div className="score-board">
            <h2 className="current-score">Current Score: {score}</h2>
            <h2 className="best-score">Best Score: {bestScore}</h2>
        </div>
    )
}

export default Scoreboard;