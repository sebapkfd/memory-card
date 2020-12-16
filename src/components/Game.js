import React, {useEffect, useState} from "react";
import Title from "./Title";
import ScoreBoard from "./Scoreboard";
import CardBoard from "./Cardboard";

function Game() {
    const [score, setScore] = useState(0);
    const [bestScore, setBestScore] = useState(0);
    const [cards, setCards] = useState([
        {cardName: 'Crimson', selected : false},
        {cardName: 'Navy', selected : false},
        {cardName: 'Green', selected : false},
        {cardName: 'Gold', selected : false},
        {cardName: 'Orange', selected : false},
        {cardName: 'Purple', selected : false},
        {cardName: 'Brown', selected : false},
        {cardName: 'Pink', selected : false},
        {cardName: 'Gray', selected : false},
        {cardName: 'Olive', selected : false},
        {cardName: 'Aqua', selected : false},
        {cardName: 'Teal', selected : false}
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
    }, [bestScore, score])

    return (
        <div className="Game">
            <Title/>
            <ScoreBoard
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
