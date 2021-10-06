import React from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { clearGame, increaseScore, setBestScore, shuffleArray, updateCards } from "../redux/gameSlice";

const Card = ({ card }) => {
    const score = useSelector(state => state.game.score);
    const dispatch = useDispatch();

    const clickCard = () => {
        if (score < 15) {
            if (card.selected) {
                dispatch(clearGame())
            }
            dispatch(updateCards({ name: card.name }));
            dispatch(increaseScore());
            dispatch(setBestScore());
            dispatch(shuffleArray());
        }
    }

    const divStyle = {
        color: 'white',
        backgroundColor:`${card.name}`
    };

    return (
        <div className="card" onClick={() => clickCard()} style={divStyle}>
            <h3>{card.name}</h3>
        </div>
    )
}
export default Card;