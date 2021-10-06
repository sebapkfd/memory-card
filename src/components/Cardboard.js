import React from "react";
import Card from './Card';
import { useSelector } from "react-redux";

const Cardboard = () => {
    const cards = useSelector(state => state.game.cards);

    return (
        <div className="card-board">
            {cards.map((card) => {
                return <Card
                    card={card}
                    key={card.name}
                />
            })}
        </div>
    )
}

export default Cardboard;