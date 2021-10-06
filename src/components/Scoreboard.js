import React from "react";
import { useDispatch } from "react-redux";
import { clearGame } from "../redux/gameSlice";
import { useSelector } from "react-redux";

const Scoreboard = () => {
    const dispatch = useDispatch();
    const score = useSelector(state => state.game.score);
    const bestScore = useSelector(state => state.game.bestScore);

    return (score === 15) ? (
        <div className='score-board'>
            <h2>You have won!</h2>
            <button onClick={() => dispatch(clearGame())}>Play Again</button>
        </div>
    ) : (
        <div className="score-board">
            <h2 className="current-score">Current Score: {score}</h2>
            <h2 className="best-score">Best Score: {bestScore}</h2>
        </div>
    )
}

export default Scoreboard;