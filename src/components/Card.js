import React from "react";

const Card = (props) =>{
    const {card, select} = props;
    return (
        <div className="Card" onClick={() => select(card.cardName)}>
            <h3>{card.cardName}</h3>
            <h3>{card.selected.toString()}</h3>
        </div>
    )
}

export default Card;