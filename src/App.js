import React from "react";
import Title from "./components/Title";
import ScoreBoard from "./components/Scoreboard";
import CardBoard from "./components/Cardboard";
import Instructions from "./components/Instructions";
import "./App.css";

function App() {
    return (
        <div className="App">
            <Title />
            <Instructions />
            <ScoreBoard />
            <CardBoard/>
        </div>
    )
}

export default App;
