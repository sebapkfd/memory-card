import React from "react";

const Scoreboard = (props) => {
    const {score, bestScore} = props;

    return (
        <div className="ScoreBoard">
            <h2>
                Current Score: {score}
            </h2>
            <h2>
                bestScore: {bestScore}
            </h2>
        </div>
    )
}

export default Scoreboard;