import { createSlice } from "@reduxjs/toolkit";
import cardList from "../components/cardList";

export const initialState = {
    value: 0,
    bestValue: 0,
    cards: cardList
}

const GameSlice = createSlice({
    name: 'game',
    initialState,
    reducers: {
        clearGame: (state, action) => {
            for (const key in state) {
                state[key] = initialState[key]
            }
        }
    }
})

export const { clearGame } = GameSlice.actions;

export default GameSlice.reducer;