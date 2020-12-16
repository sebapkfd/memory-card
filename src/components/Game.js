import React, {useEffect, useState} from "react";
import Title from "./Title";
import ScoreBoard from "./Scoreboard";
import CardBoard from "./Cardboard";

function Game() {
    const [score, setScore] = useState(0);
    const [bestScore, setBestScore] = useState(0);
    const [cards, setCards] = useState([
        {cardName: '1', selected : false},
        {cardName: '2', selected : false},
        {cardName: '3', selected : false},
        {cardName: '4', selected : false},
        {cardName: '5', selected : false},
        {cardName: '6', selected : false}
    ])
    

    const selectCard = (name) => {    
        let updatedCards = cards.map(card => {
            if(card.cardName === name){
                return {...card, selected: !card.selected}
            }
            return card;
        })
        setCards(updatedCards);
        setScore(score + 1);
    }

    const resetGame = () => {
        setScore(0);
        let defaultCards = cards.map(card => {
            return {...card, selected: false}
        })
        setCards(defaultCards);
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
                setScore={selectCard}
                resetScore={resetGame}
                cards={cards}
            />
        </div>
    );
}

export default Game;
