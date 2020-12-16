import React, {useEffect, useState} from "react";
import Title from "./Title";
import ScoreBoard from "./Scoreboard";
import CardBoard from "./Cardboard";

function Game() {
    const [score, setScore] = useState(0);
    const [bestScore, setBestScore] = useState(0);
    const [cards, setCards] = useState([
        {cardName: 'Red', selected : false},
        {cardName: 'Blue', selected : false},
        {cardName: 'Green', selected : false}
    ])
    

    const addScore = (name) => {    
        let updatedCards = cards.map(card => {
            if(card.cardName === name){
                return {...card, selected: !card.selected}
            }
            return card;
        })
        setCards(updatedCards);
        setScore(score + 1);
    }

    useEffect(() =>{
        if(bestScore <= score) {
            setBestScore(score);
        }
    }, [score])

    return (
        <div className="Game">
            <Title/>
            <ScoreBoard //Don't touch!!
                score={score}
                bestScore={bestScore}
            />
            <CardBoard
                score={score}
                setScore={addScore}
                cards={cards}
            />
        </div>
    );
}

export default Game;
