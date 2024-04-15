import { createSlice } from '@reduxjs/toolkit';

export const placeholderCard = {
    CCV: "XXX",
    cardHolderName: "FIRSTNAME LASTNAME",
    cardNumber: "XXXX XXXX XXXX XXXX",
    validThru: "MM/YY",
    vendor: "",
}

const emptyCard = {
    CCV: "",
    cardHolderName: "",
    cardNumber: "",
    validThru: "",
    vendor: "",
}

const initialState = {
    cards: [],
    selectedCard: 0,
    newCard: emptyCard,
};

const cardsSlice = createSlice({
    name: 'card',
    initialState,
    reducers: {
        addCard(state, action) {
            console.log('State är: ', state);
            console.log('Action är: ', action);
            state.cards = [...state.cards, state.newCard];
            state.newCard = emptyCard;
            console.log("cards:", state.cards);
        },
        updateNewCard(state, action) {
            console.log('Update new card:', action)
            state.newCard = action.payload;
        }
    },
});

export const { addCard, updateNewCard } = cardsSlice.actions;

export default cardsSlice.reducer;
