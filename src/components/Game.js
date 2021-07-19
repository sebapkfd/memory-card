import React, {useEffect, useState} from "react";
import Title from "./Title";
import ScoreBoard from "./Scoreboard";
import CardBoard from "./Cardboard";
import cardList from "./cardList";

function Game() {
    const [score, setScore] = useState(0);
    const [bestScore, setBestScore] = useState(0);
    const [cards, setCards] = useState(cardList);

    const selectCard = (name) => {    
        let updatedCards = cards.map(card => {
            if(card.name === name){
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
        <div className="game">
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
