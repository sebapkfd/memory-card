import React from "react";

const Scoreboard = (props) => {
    const {score, bestScore, playAgain} = props;

    if (score === 15) {
        return (
            <div className='score-board'>
                <h2>You have won!</h2>
                <button onClick={() => playAgain()}>Play Again</button>
            </div>
        )
    }

    return (
        <div className="score-board">
            <h2 className="current-score">Current Score: {score}</h2>
            <h2 className="best-score">Best Score: {bestScore}</h2>
        </div>
    )
}

export default Scoreboard;