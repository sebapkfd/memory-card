import React, {useEffect} from "react";
import Card from './Card';

const Cardboard = (props) => {
    const {setScore, resetScore, cards} = props;

    useEffect(() => {
        for (let i = cards.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [cards[i], cards[j]] = [cards[j], cards[i]];
        }
    }, [cards])

    return (
        <div className="Cardboard">
            {cards.map((card) => {
                return <Card
                    card={card}
                    select={setScore}
                    clean={resetScore}
                    key={card.cardName}
                />
            })}
        </div>
    )
}

export default Cardboard;