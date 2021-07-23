import React from "react";

const Card = (props) =>{
    const {card, select, clean, score} = props;

    const clickCard = () => {
        if (score < 15) {
            (card.selected) ? clean() : select(card.name);
        }
    }

    const divStyle = {
        color: 'white',
        backgroundColor:`${card.name}`
    };

    return (
        <div className="card" onClick={clickCard} style={divStyle}>
            <h3>{card.name}</h3>
        </div>
    )
}
export default Card;