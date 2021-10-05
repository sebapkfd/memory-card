import React, {useEffect} from "react";
import Card from './Card';

const Cardboard = ({ setScore, resetScore, cards, score }) => {

    useEffect(() => {
        for (let i = cards.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [cards[i], cards[j]] = [cards[j], cards[i]];
        }
    }, [cards])

    return (
        <div className="card-board">
            {cards.map((card) => {
                return <Card
                    card={card}
                    score={score}
                    select={setScore}
                    clean={resetScore}
                    key={card.name}
                />
            })}
        </div>
    )
}

export default Cardboard;