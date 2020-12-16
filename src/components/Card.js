import React from "react";

const Card = (props) =>{
    const {card, select, clean} = props;

    const clickCard = () => {
        if(!card.selected){
            select(card.cardName);
        }else{
            clean();
        }
    }

    return (
        <div className="Card" onClick={clickCard}>
            <h3>{card.cardName}</h3>
            <h3>{card.selected.toString()}</h3>
        </div>
    )
}

export default Card;