import React from "react";

const Scoreboard = (props) => {
    const {score, bestScore} = props;

    return (
        <div className="ScoreBoard">
            <h2 className="CurrentScore">Current Score: {score}</h2>
            <h2 className="BestScore">Best Score: {bestScore}</h2>
        </div>
    )
}

export default Scoreboard;