import React from "react";

const Card = (props) =>{
    const {card, select, clean} = props;

    const clickCard = () => {
        (card.selected) ? clean() : select(card.name);
    }

    const divStyle = {
        color: 'white',
        backgroundColor:`${card.name}`,
    };

    return (
        <div className="Card" onClick={clickCard} style={divStyle}>
            <h3>{card.name}</h3>
        </div>
    )
}
export default Card;