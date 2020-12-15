import React, {useState} from "react";
import Card from './Card';

const Cardboard = (props) => {

    const {setScore, cards} = props;

    return (
        <div className="Cardboard">
            {cards.map((card) => {
                return <Card
                    card={card}
                    select={setScore}
                    key={card.cardName}
                />
            })}
        </div>
    )
}

export default Cardboard;