import { createSlice } from "@reduxjs/toolkit";
import cardList from "../components/cardList";

export const initialState = {
    score: 0,
    bestScore: 0,
    cards: cardList
}

const GameSlice = createSlice({
    name: 'game',
    initialState,
    reducers: {
        clearGame: (state, action) => {
            state.score = 0
            state.cards = initialState.cards
        },
        updateCards: (state, action) => {
            const { name } = action.payload
            let cardToUpdate = state.cards.find(card => card.name === name)
            if (cardToUpdate) {
                cardToUpdate.selected = !cardToUpdate.selected
            }
        },
        increaseScore: (state, action) => {
            state.score += 1
        },
        setBestScore: (state, action) => {
            if(state.score >= state.bestScore) {
                state.bestScore = state.score
            }
        },
        shuffleArray: (state, action) => {
            for (let i = state.cards.length - 1; i > 0; i--) {
                const j = Math.floor(Math.random() * (i + 1));
                [state.cards[i], state.cards[j]] = [state.cards[j], state.cards[i]];
            }
        }
    }
})

export const { clearGame, updateCards, increaseScore, setBestScore, shuffleArray } = GameSlice.actions;

export default GameSlice.reducer;