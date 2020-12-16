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
    const divStyle = {
        color: 'white',
        backgroundColor:`${card.cardName}`,
    };

    return (
        <div className="Card" onClick={clickCard} style={divStyle}>
            <h3>{card.cardName}</h3>
        </div>
    )
}
export default Card;