import React from "react";
import Title from "./Title";
import ScoreBoard from "./Scoreboard";
import CardBoard from "./Cardboard";
import Instructions from "./Instructions";

const Game = () => {
    return (
        <div className="game">
            <Title />
            <Instructions />
            <ScoreBoard />
            <CardBoard/>
        </div>
    );
}

export default Game;
