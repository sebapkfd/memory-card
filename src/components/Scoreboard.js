import React from "react";

const Scoreboard = (props) => {
    const {score, bestScore} = props;

    return (
        <div className="score-board">
            <h2 className="current-score">Current Score: {score}</h2>
            <h2 className="best-score">Best Score: {bestScore}</h2>
        </div>
    )
}

export default Scoreboard;